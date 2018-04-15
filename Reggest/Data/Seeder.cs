﻿using Microsoft.AspNetCore.Hosting;
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
        public static async Task<IWebHost> SeedData(this IWebHost webHost)
        {
            using (var scope = webHost.Services.GetService<IServiceScopeFactory>().CreateScope())
            {
                using (var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>())
                {
                    context.Database.Migrate();

                    SeedFitnessPlans(context);
                    SeedQandA(context);
                    
                    context.SaveChanges();
                }
            }

            return webHost;
        }

        private static void SeedQandA(ApplicationDbContext context)
        {
            var questions = new List<Question>
            {
                new Question
                {
                    QuestionText = "How many days a week do you want to do strength training (Not cardio) on average?",
                    Answers = new List<Answer>
                    {
                        new Answer { AnswerText = "1-3" },
                        new Answer { AnswerText = "4-5" },
                        new Answer { AnswerText = "5+" },
                    }
                },
                new Question
                {
                    QuestionText = "Are you comfortable and able to use 20kg (45lbs) bars?",
                    Answers = new List<Answer>
                    {
                        new Answer { AnswerText = "Yes" },
                        new Answer { AnswerText = "No" },
                        new Answer { AnswerText = "Not sure" },
                    }
                },
                new Question
                {
                    QuestionText = "What's your goal from doing strength training?",
                    Answers = new List<Answer>
                    {
                        new Answer { AnswerText = "I want to look good naked" },
                        new Answer { AnswerText = "I want to be stronger" },
                        new Answer { AnswerText = "Both" },
                    }
                }
            };

            context.Questions.AddRange(questions.Where(question => !context.Questions.Any(x => x.QuestionText == question.QuestionText)));
        }

        private static void SeedFitnessPlans(ApplicationDbContext context)
        {
            var fitnessPlans = new List<FitnessPlan>
            {
                new FitnessPlan
                {
                    Name = "GZCLP",
                    Description = "Free novice strength training program with linear progression. Focuses on main barbell movements with machine and dumbbell accessories, making it easy to customize for aesthetic goals. Many prefer the structure and body part balance of GZCL over StrongLifts and Starting Strength, but there is no movement instruction provided. 3 days per week.",
                    Link = "https://www.reddit.com/r/Fitness/comments/6pjiwd/heres_a_quick_summary_of_the_gzclp_linear/"
                },
                new FitnessPlan
                {
                    Name = "Starting Strength",
                    Description = "Book paired with a simple program for foundational strength. 3 days/week workout schedule on only the major barbell movements (no accessory work).",
                    Link = "https://startingstrength.com/"
                },
                new FitnessPlan
                {
                    Name = "StrongLifts 5x5",
                    Description = "Free website-based beginner's program. 3 days/week workout schedule on only the major barbell movements (no accessory work). Very similar to Starting Strength but adds rows and adjusts the volume slightly.",
                    Link = "https://stronglifts.com/5x5/"
                },
                new FitnessPlan
                {
                    Name = "Strong Curves",
                    Description = "An aesthetics-based beginners program. Focuses on glute and lower body development, while also including upper body work as well. 3 days per week. Link includes a free 4 week sample workout. See here for a user who created tracking spreadsheets.",
                    Link = "https://www.reddit.com/r/xxfitness/comments/3k7e47/ok_the_color_coded_google_excel_strong_curve/?st=jfzvxru9&sh=a1dd43f2",
                },
                new FitnessPlan
                {
                    Name = "Thinner Leaner Stronger",
                    Description = "Book with fitness program, diet advice, supplement recommendations, etc. Comes in 3/4/5 day variants.",
                    Link = "https://www.muscleforlife.com/thinner-leaner-stronger/"
                },
                new FitnessPlan
                {
                    Name = "Dumbbell Only Basics",
                    Description = "For those limited to dumbbells only or who want to start with less technical movements. A traditional bodypart 'split' routine with days dedicated to chest/triceps, back/biceps, and legs/shoulders. 3 days per week.",
                    Link = "https://www.muscleandstrength.com/workouts/frankoman-dumbbell-only-split.html"
                }
            };

            context.FitnessPlans.AddRange(fitnessPlans.Where(fitnessPlan => !context.FitnessPlans.Any(x => x.Name == fitnessPlan.Name)));
        }
    }
}
