using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Reggest.Components.fitness;
using Reggest.Components.qAndA;
using Reggest.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Data
{
    public static class Seeder
    {
        const string GZCLP = "GZCLP";
        const string StartingStrength = "Starting Strength";
        const string StrongLifts = "StrongLifts 5x5";
        const string StrongCurves = "Strong Curves";
        const string ThinnerLeanerStronger = "Thinner Leaner Stronger";
        const string DumbbellOnlyBasics = "Dumbbell Only Basics";
        public static List<FitnessPlan> FitnessPlans { get; set; }
        public static List<Question> Questions { get; set; }
        private static IAnswerService _answerService;
        private static IQuestionService _questionService;
        private static IFitnessPlanService _fitnessPlanService;

        public static async Task<IWebHost> SeedData(this IWebHost webHost)
        {
            using (var scope = webHost.Services.GetService<IServiceScopeFactory>().CreateScope())
            {
                using (var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>())
                {
                    _answerService = scope.ServiceProvider.GetRequiredService<IAnswerService>();
                    _questionService = scope.ServiceProvider.GetRequiredService<IQuestionService>();
                    _fitnessPlanService = scope.ServiceProvider.GetRequiredService<IFitnessPlanService>();

                    context.Database.Migrate();

                    SeedFitnessPlans();
                    SeedQandA();
                }
            }

            return webHost;
        }

        static void SetFitnessPlanAnswerPoints(this Answer answer, IDictionary<string, Match> fitnessPlanAnswerDictionary)
        {
            var fitnessPlanAnswerPoints = new List<FitnessPlanAnswerPoint>();

            foreach (var fitnessPlanAnswerKeyValue in fitnessPlanAnswerDictionary)
            {
                var fitnssPlan = _fitnessPlanService.GetAll().Single(x => x.Name == fitnessPlanAnswerKeyValue.Key);

                fitnessPlanAnswerPoints.Add(new FitnessPlanAnswerPoint
                {
                    FitnessPlan = fitnssPlan,
                    Points = (int)fitnessPlanAnswerKeyValue.Value,
                });
            }

            answer.FitnessPlanAnswerPoints = fitnessPlanAnswerPoints;
        }

        private static void SeedQandA()
        {
            Answer GetAnswer(string answerText, int points, IDictionary<string, Match> fitnessPlanAnswerDictionary)
            {
                var answer = new Answer
                {
                    AnswerText = answerText,
                    Points = points,
                };

                answer.SetFitnessPlanAnswerPoints(fitnessPlanAnswerDictionary);

                return answer;
            }

            List<Answer> GetSlidingScaleAnswers(IDictionary<string, Match> fitnessPlanAnswerDictionary)
            {
                var answers = new List<Answer>
                {
                    GetAnswer(Match.VeryDislike.GetDisplayName(), (int)Match.VeryDislike, fitnessPlanAnswerDictionary),
                    GetAnswer(Match.Dislike.GetDisplayName(), (int)Match.Dislike, fitnessPlanAnswerDictionary),
                    GetAnswer(Match.DontCare.GetDisplayName(), (int)Match.DontCare, fitnessPlanAnswerDictionary),
                    GetAnswer(Match.Like.GetDisplayName(), (int)Match.Like, fitnessPlanAnswerDictionary),
                    GetAnswer(Match.VeryLike.GetDisplayName(), (int)Match.VeryLike, fitnessPlanAnswerDictionary)
                };

                return answers;
            }

            Questions = new List<Question>
            {
                new Question
                {
                    QuestionText = "Do you like using dumbbells in your workout routine?",
                    Answers = GetSlidingScaleAnswers(new Dictionary<string, Match>
                    {
                        { GZCLP, Match.DontCare },
                        { StartingStrength, Match.DontCare },
                        { StrongLifts, Match.DontCare },
                        { StrongCurves, Match.Dislike },
                        { ThinnerLeanerStronger, Match.VeryDislike },
                        { DumbbellOnlyBasics, Match.VeryLike },
                    })
                },
                new Question
                {
                    QuestionText = "Do you like using barbells in your workout routine?",
                    Answers = GetSlidingScaleAnswers(new Dictionary<string, Match>
                    {
                        { GZCLP, Match.DontCare },
                        { StartingStrength, Match.DontCare },
                        { StrongLifts, Match.DontCare },
                        { StrongCurves, Match.DontCare },
                        { ThinnerLeanerStronger, Match.DontCare },
                        { DumbbellOnlyBasics, Match.VeryLike }
                    }),
                },
            };

            var questions = _questionService.GetAll();

            _questionService.AddQuestions(Questions.Where(question => !questions.Any(x => x.QuestionText == question.QuestionText)).ToList());
        }

        private static void SeedFitnessPlans()
        {
            FitnessPlans = new List<FitnessPlan>
            {
                new FitnessPlan
                {
                    Name = GZCLP,
                    Description = "Free novice strength training program with linear progression. Focuses on main barbell movements with machine and dumbbell accessories, making it easy to customize for aesthetic goals. Many prefer the structure and body part balance of GZCL over StrongLifts and Starting Strength, but there is no movement instruction provided. 3 days per week.",
                    Link = "https://www.reddit.com/r/Fitness/comments/6pjiwd/heres_a_quick_summary_of_the_gzclp_linear/"
                },
                new FitnessPlan
                {
                    Name = StartingStrength,
                    Description = "Book paired with a simple program for foundational strength. 3 days/week workout schedule on only the major barbell movements (no accessory work).",
                    Link = "https://startingstrength.com/"
                },
                new FitnessPlan
                {
                    Name = StrongLifts,
                    Description = "Free website-based beginner's program. 3 days/week workout schedule on only the major barbell movements (no accessory work). Very similar to Starting Strength but adds rows and adjusts the volume slightly.",
                    Link = "https://stronglifts.com/5x5/"
                },
                new FitnessPlan
                {
                    Name = StrongCurves,
                    Description = "An aesthetics-based beginners program. Focuses on glute and lower body development, while also including upper body work as well. 3 days per week. Link includes a free 4 week sample workout. See here for a user who created tracking spreadsheets.",
                    Link = "https://www.reddit.com/r/xxfitness/comments/3k7e47/ok_the_color_coded_google_excel_strong_curve/?st=jfzvxru9&sh=a1dd43f2",
                },
                new FitnessPlan
                {
                    Name = ThinnerLeanerStronger,
                    Description = "Book with fitness program, diet advice, supplement recommendations, etc. Comes in 3/4/5 day variants.",
                    Link = "https://www.muscleforlife.com/thinner-leaner-stronger/"
                },
                new FitnessPlan
                {
                    Name = DumbbellOnlyBasics,
                    Description = "For those limited to dumbbells only or who want to start with less technical movements. A traditional bodypart 'split' routine with days dedicated to chest/triceps, back/biceps, and legs/shoulders. 3 days per week.",
                    Link = "https://www.muscleandstrength.com/workouts/frankoman-dumbbell-only-split.html"
                }
            };

            var fitnessPlans = _fitnessPlanService.GetAll();

            _fitnessPlanService.AddFitnessPlans(FitnessPlans.Where(fitnessPlan => !fitnessPlans.Any(x => x.Name == fitnessPlan.Name)).ToList());
        }
    }
}
