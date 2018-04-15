using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Reggest.Components.fitness;
using Reggest.Components.qAndA;
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

        private static void SeedQandA()
        {
            List<FitnessPlanAnswerPoint> GetFitnessPlanAnswerPoints(IDictionary<string, Match> fitnessPlanAnswerDictionary)
            {
                var fitnessPlanAnswerPoints = new List<FitnessPlanAnswerPoint>();

                foreach (var fitnessPlanAnswerKeyValue in fitnessPlanAnswerDictionary)
                {
                    fitnessPlanAnswerPoints.Add(new FitnessPlanAnswerPoint
                    {
                        FitnessPlan = _fitnessPlanService.GetAll().Single(x => x.Name == fitnessPlanAnswerKeyValue.Key),
                        Points = (int)fitnessPlanAnswerKeyValue.Value,
                    });
                }

                return fitnessPlanAnswerPoints;
            }

            Questions = new List<Question>
            {
                new Question
                {
                    QuestionText = "How many days a week do you want to do strength training (Not cardio) on average?",
                    Answers = new List<Answer>
                    {
                        new Answer { AnswerText = "1-3", FitnessPlanAnswerPoints = GetFitnessPlanAnswerPoints(new Dictionary<string, Match>{
                            { GZCLP, Match.No },
                            { StartingStrength, Match.No },
                            { StrongLifts, Match.No },
                            { StrongCurves, Match.No },
                            { ThinnerLeanerStronger, Match.Partial },
                            { DumbbellOnlyBasics, Match.Partial },
                        })},
                        new Answer { AnswerText = "4-5", FitnessPlanAnswerPoints = GetFitnessPlanAnswerPoints(new Dictionary<string, Match>{
                            { GZCLP, Match.Perfect },
                            { StartingStrength, Match.Perfect },
                            { StrongLifts, Match.No },
                            { StrongCurves, Match.No },
                            { ThinnerLeanerStronger, Match.No },
                            { DumbbellOnlyBasics, Match.Partial },
                        }) },
                        new Answer { AnswerText = "5+", FitnessPlanAnswerPoints = GetFitnessPlanAnswerPoints(new Dictionary<string, Match>{
                            { GZCLP, Match.Perfect },
                            { StartingStrength, Match.Perfect },
                            { StrongLifts, Match.No },
                            { StrongCurves, Match.No },
                            { ThinnerLeanerStronger, Match.Perfect },
                            { DumbbellOnlyBasics, Match.Partial },
                        }) },
                    }
                },
                new Question
                {
                    QuestionText = "Are you comfortable and able to use 20kg (45lbs) bars?",
                    Answers = new List<Answer>
                    {
                        new Answer { AnswerText = "Yes", FitnessPlanAnswerPoints = GetFitnessPlanAnswerPoints(new Dictionary<string, Match>{
                            { GZCLP, Match.Partial },
                            { StartingStrength, Match.No },
                            { StrongLifts, Match.No },
                            { StrongCurves, Match.No },
                            { ThinnerLeanerStronger, Match.No },
                            { DumbbellOnlyBasics, Match.Perfect },
                        }) },
                        new Answer { AnswerText = "No", FitnessPlanAnswerPoints = GetFitnessPlanAnswerPoints(new Dictionary<string, Match>{
                            { GZCLP, Match.Perfect },
                            { StartingStrength, Match.No },
                            { StrongLifts, Match.No },
                            { StrongCurves, Match.Perfect },
                            { ThinnerLeanerStronger, Match.Partial },
                            { DumbbellOnlyBasics, Match.No },
                        }) },
                        new Answer { AnswerText = "Not sure", FitnessPlanAnswerPoints = GetFitnessPlanAnswerPoints(new Dictionary<string, Match>{
                            { GZCLP, Match.Perfect },
                            { StartingStrength, Match.Perfect },
                            { StrongLifts, Match.No },
                            { StrongCurves, Match.No },
                            { ThinnerLeanerStronger, Match.Perfect },
                            { DumbbellOnlyBasics, Match.No },
                        }) },
                    }
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
