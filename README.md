## [reggest.com](https://www.reggest.com)

## Dev Setup
1. run "git clone https://github.com/MartinDawson/Reggest.git"
2. Cd into the newly created "Reggest/Reggest" folders
3. run "npm i -g yarn"
4. run "yarn" to install the correct node packages
5. run "dotnet restore" to build the nuget packages
6. Install [watchman](https://facebook.github.io/watchman/docs/install.html) and follow the setup
7. Create a '.env' file in the root project. I.e "Reggest/Reggest/.env". Add the variables from the [.env variables section here](https://github.com/MartinDawson/Reggest/blob/master/README.md#env-variables).
8. Create a database in Microsoft SQL Server Management Studio Called 'Reggest'. I.e in the 'Databases/Reggest' section.
    - Server name: '.'
    - Authentication: 'Windows Authentication'
9. run "yarn run start" to start the project
10. Open http://localhost:8080

### .env variables
NODE_ENV=Development

Note: Some env variables are private and you will not have access to such as the 'RECAPTCHA_SITE_KEY' for security reasons.

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
