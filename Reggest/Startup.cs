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

namespace Reggest
{
    public class Startup
    {
        private readonly IConfiguration _configuration;

        public Startup(IConfiguration configuration, ILoggerFactory loggerFactory)
        {
            _configuration = configuration;
            loggerFactory.CreateLogger<Startup>();
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
               options.UseSqlServer(_configuration.GetConnectionString("DefaultConnection")));
            // services.AddApplicationInsightsTelemetry(_configuration["ApplicationInsights:InstrumentationKey"]);
            services.AddSession(options =>
            {
                options.IdleTimeout = TimeSpan.FromMinutes(30);
                options.Cookie.Name = ".Reggest";
            });
            services.Configure<MvcOptions>(options =>
            {
                options.Filters.Add(new RequireHttpsAttribute());
            });
            services.Configure<DataProtectionTokenProviderOptions>(options =>
            {
                options.TokenLifespan = TimeSpan.FromMinutes(30);
            });
            services.AddGraphQLHttp();
            services.AddMvc().AddJsonOptions(x => x.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore);
            services.AddMemoryCache();

            var builder = RegisterServices();

            builder.Populate(services);

            var container = builder.Build();

            return container.Resolve<IServiceProvider>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseBrowserLink();
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
            }

            app.UseStaticFiles();

            app.UseMvc();
        }

        private ContainerBuilder RegisterServices()
        {
            var builder = new ContainerBuilder();
            var assembly = Assembly.GetExecutingAssembly();

            builder.Register(x => _configuration).As<IConfiguration>().SingleInstance();
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
            builder.RegisterAssemblyTypes(assembly).AsClosedTypesOf(typeof(NodeGraphType<>));
            builder.RegisterAssemblyTypes(assembly).AsClosedTypesOf(typeof(ObjectGraphType<>));
            builder.RegisterAssemblyTypes(assembly).AsClosedTypesOf(typeof(InterfaceGraphType<>));
            builder.RegisterAssemblyTypes(assembly).AsClosedTypesOf(typeof(MutationPayloadGraphType<,>));
            builder.RegisterAssemblyTypes(assembly).Where(x => x.Name.EndsWith("Service")).AsImplementedInterfaces();

            builder.RegisterType<AppQuery>();
            builder.RegisterType<AppMutation>();
            builder.RegisterType<AuthMessageSender>().As<IEmailSender>();
            builder.RegisterType<AuthMessageSender>().As<ISmsSender>();

            return builder;
        }
    }
}
