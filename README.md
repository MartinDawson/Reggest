## [reggest.com](https://www.reggest.com)

## Prerequisites
1. [Yarn](https://yarnpkg.com/lang/en/docs/install/#windows-stable)
2. [Dotnet SDK](https://www.microsoft.com/net/learn/get-started/windows)
3. [Microsoft SQL Server Management Studio](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-2017). 2017 version is recommended.
4. [Watchman](https://facebook.github.io/watchman/docs/install.html). Follow the setup.

## Dev Setup
1. run `git clone https://github.com/MartinDawson/Reggest.git` on your command prompt
2. run `cd Reggest/Reggest` to move into the source directory of the solution
3. run `yarn install` to install the correct npm packages
4. run `dotnet restore` to build the nuget packages
6. Create a '.env' file in this directory. I.e "Reggest/Reggest/.env". Copy and paste all of the variables from the [.env variables section here](https://github.com/MartinDawson/Reggest/blob/master/README.md#env-variables) into this file.
7. Create a new empty database in Microsoft SQL Server Management Studio Called 'Reggest' by clicking on 'New Database' on the 'Databases' folder. Example: https://user-images.githubusercontent.com/15030491/39398017-1a02e840-4b08-11e8-928e-c3397e0297c2.jpg 
    - Server name: '.'
    - Authentication: 'Windows Authentication'
8. run `yarn run start` to start the project
9. Open http://localhost:8080

### .env variables
```
NODE_ENV=Development
RECAPTCHA_SITE_KEY=6Ley01QUAAAAAHFUtLNjjoZzJAOEqr1iyztvEECM
```

### Feedback
https://www.reddit.com/r/xxfitness/comments/8f5ct5/i_created_a_website_that_recommends_fitness_plans/?st=jgjjqg9m&sh=c12a96e5

### The problem
There are a lot of fitness plans in the world that overwhelm beginners

### The solution
Implement a simplistic QandA functionality type app that suggests the best fitness plans to meet the users goals

### Key aspects
- Must provide a fitness plan that meets the users needs
- Must be as simple as possible for the user
- The faster the user gets to their chosen fitness plan in as little questions as possible the better
- Must only provide fitness plans that are being used by many people and/or have proven results

### Current Target Audience
- Beginners who are starting fitness in gyms, specifically users from r/fitness and r/xxfitness

### Business Model
- Free app

### Competitors
- http://www.rohitnair.net/pp/: 
  - End results are a long wall of text for some chosen features
  - Doesn't list many results for chosen fitness programs
  - Unnecessary choices such as Police/Military Training which noone cares about
  - Not specific enough to users goals, e.g. days per week training
- https://www.bodbot.com/
  - Doesn't list specific fitness plans such as 'Strong Curves', 'Nsuns' etc but instead gives specific exercices
  - Not recommended by r/xxfitness or r/fitness to do this but instead to use pre-made tested plans
- http://www.strongur.io/
  - Same problems as bodbot
