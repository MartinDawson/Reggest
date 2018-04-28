using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Reggest.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using GraphQL.Server.Transports.AspNetCore;
using Newtonsoft.Json;
using Autofac;
using System.Reflection;
using Reggest.Components.GraphQl;
using GraphQL.Types;
using GraphQL;
using GraphQL.Relay.Types;
using Reggest.Services;
using Autofac.Extensions.DependencyInjection;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.AspNetCore.Rewrite;
using Reggest.Components.qAndA;
using Reggest.Repository;
using Reggest.Components.fitness;
using Reggest.Components.account;
using Reggest.Components.graphQl;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Filters;

namespace Reggest
{
    public class Startup
    {
        private readonly IConfiguration _configuration;
        private readonly IHostingEnvironment _env;

        public Startup(IConfiguration configuration, ILoggerFactory loggerFactory, IHostingEnvironment env)
        {
            _configuration = configuration;
            _env = env;
            loggerFactory.CreateLogger<Startup>();
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
               options.UseSqlServer(_configuration.GetConnectionString("DefaultConnection")), ServiceLifetime.Transient);

            var instrumentationKey = _configuration["applicationInsights:key"];

            if (instrumentationKey != null)
            {
                services.AddApplicationInsightsTelemetry(instrumentationKey);
            }

            services.AddIdentity<ApplicationUser, IdentityRole>(options =>
            {
                options.Password.RequireDigit = false;
                options.Password.RequireLowercase = false;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = false;
                options.Password.RequiredLength = 0;
                // Allow all characters
                options.User.AllowedUserNameCharacters = string.Empty;
                options.User.RequireUniqueEmail = true;
            })
            .AddEntityFrameworkStores<ApplicationDbContext>()
            .AddDefaultTokenProviders();

            services.AddSession(options =>
            {
                options.IdleTimeout = TimeSpan.FromMinutes(30);
                options.Cookie.Name = ".Reggest";
            });

            services.Configure<MvcOptions>(options =>
            {
                if (!_env.IsDevelopment())
                {
                    options.Filters.Add(new RequireHttpsAttribute());
                }
            });

            services.Configure<DataProtectionTokenProviderOptions>(options =>
            {
                options.TokenLifespan = TimeSpan.FromMinutes(30);
            });
            services.AddGraphQLHttp();
            services.AddMvc().AddJsonOptions(x => x.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore);
            services.AddMemoryCache();

            //services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
            //  .AddCookie(o => o.LoginPath = new PathString("/login"))
            //  .AddFacebook(o =>
            //  {
            //      o.AppId = _configuration["OAuth:Facebook:Id"];
            //      o.AppSecret = _configuration["OAuth:Facebook:Secret"];
            //      o.Scope.Add("email");
            //  }).AddTwitter(o =>
            //  {
            //      o.ConsumerKey = _configuration["OAuth:Twitter:Id"];
            //      o.ConsumerSecret = _configuration["OAuth:Twitter:Secret"];
            //      o.RetrieveUserDetails = true;
            //  }).AddGoogle(o =>
            //  {
            //      o.ClientId = _configuration["OAuth:Google:Id"];
            //      o.ClientSecret = _configuration["OAuth:Google:Secret"];
            //      o.Scope.Add("email");
            //  });

            var builder = RegisterServices();

            builder.Populate(services);

            var container = builder.Build();

            return container.Resolve<IServiceProvider>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(_configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseBrowserLink();
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    ConfigFile = "./webpack.config.js",
                });
            }
            else
            {
                app.UseExceptionHandler("/Error");
            }


            async Task<Context> BuildUserContext(HttpContext c)
            {
                var userManager = app.ApplicationServices.GetRequiredService<UserManager<ApplicationUser>>();
                var currentUser = await userManager.GetUserAsync(c.User);

                return new Context
                {
                    CurrentUser = currentUser,
                    HttpContext = c
                };
            }

            var options = new RewriteOptions();

            if (!_env.IsDevelopment())
            {
                options.AddRedirectToHttps();
            }

            app.UseRewriter(options);
            app.UseStaticFiles();
            app.UseSession();
            app.UseGraphQLHttp<AppSchema>(new GraphQLHttpOptions
            {
                ExposeExceptions = !env.IsProduction(),
                BuildUserContext = BuildUserContext,
            });
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    "constants",
                    "{controller}/constants.js",
                    new
                    {
                        controller = "App",
                        action = "GetJavaScript",
                    }
                );

                routes.MapRoute(
                    "app",
                    "{controller}/{action}"
                );

                routes.MapSpaFallbackRoute(
                    "default",
                    new
                    {
                        controller = "App",
                        action = "Index"
                    }
                );
            });
        }

        private ContainerBuilder RegisterServices()
        {
            var builder = new ContainerBuilder();
            var assembly = Assembly.GetExecutingAssembly();

            builder.Register(x =>
            {
                var context = x.Resolve<IComponentContext>();

                return new AppSchema(t =>
                {
                    var type = context.ResolveOptional(t);
                    var resolvedType = type ?? Activator.CreateInstance(t);

                    return resolvedType.As<IGraphType>();
                });
            });

            builder.RegisterAssemblyTypes(assembly).AsClosedTypesOf(typeof(GraphQL.Relay.Types.NodeGraphType<>));
            builder.RegisterAssemblyTypes(assembly).AsClosedTypesOf(typeof(ObjectGraphType<>));
            builder.RegisterAssemblyTypes(assembly).AsClosedTypesOf(typeof(InterfaceGraphType<>));
            builder.RegisterAssemblyTypes(assembly).AsClosedTypesOf(typeof(MutationPayloadGraphType<,>));
            builder.RegisterAssemblyTypes(assembly).Where(x => x.Name.EndsWith("Service")).AsImplementedInterfaces();

            builder.RegisterType<AppQuery>();
            builder.RegisterType<AppMutation>();
            builder.RegisterType<AuthMessageSender>().As<ISmsSender>();
            builder.RegisterType<Repository<Question, ApplicationDbContext>>().As<IRepository<Question>>();
            builder.RegisterType<Repository<Answer, ApplicationDbContext>>().As<IRepository<Answer>>();
            builder.RegisterType<Repository<FitnessPlan, ApplicationDbContext>>().As<IRepository<FitnessPlan>>();

            return builder;
        }
    }
}
