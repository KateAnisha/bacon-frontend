## Description of Application
### Purpose
Makin’ Bacon is an application designed to help you bring home the bacon! 

Track and record your income and expenses. By recording spending habits, you can pinpoint where your money is going and make adjustments to help you curb negative financial habits. Fully customize the application with different categories, completely tailored to your individual needs. These categories could be anything you like from food, household bills and entertainment. If you make a purchase, you can enter it against the appropriate category. Your transactions will be displayed in a variety of different graphs so you receive visual progress and updates on how you are doing for the month. Additionally, users will be able to set up a custom budget if they want to keep to a limit for each month. The user will be able to create, edit and delete this budget.

### Functionality / features
The platform will have the following features:-
1. Sign up, login/logout;
2. Create custom categories; 
3. Enter income and expenses to each category;
4. Update and delete categories and items;
5. Display information in a variety of different types of graphs (income vs expenses, category vs category);
6. Set up recurring transactions (e.g. say rent is $200 per week, instead of wasting time entering the same transaction each week, it can automatically record from week to week);

### Target audience
Students, individuals and businesses looking to improve their finances

### Tech stack
1. Rails
1. React
1. HTML & CSS/SASS
1. PostgreSQL
1. Apexcharts
1. Heroku
1. Netlify 
1. JSON Web Token

## Dataflow Diagram
### User sign up
![DFD_sign_up](./docs/DFD/sign_up.png)
### User log in
![DFD_log_in](./docs/DFD/log_in.png)
### View and create income transactions
![DFD_view_create_income_transactions](./docs/DFD/income.png)
### Update and delete income transactions
![DFD_update_delete_income_transactions](./docs/DFD/update_delete_income_transactions.png)
### View and create expense transactions
![DFD_view_create_expense_transactions](./docs/DFD/expense.png)
### Update and delete expense transactions
![DFD_update_delete_expense_transactions](./docs/DFD/update_delete_expense_transactions.png)
### Charts
![DFD_charts](./docs/DFD/charts.png)
### Create and update budget
![DFD_create_update_budget](./docs/DFD/create_update_budget.png)
### Update name
![DFD_update_user_name](./docs/DFD/update_user_name.png)
### Update password
![DFD_update_user_password](./docs/DFD/update_password.png)
### Create category
![DFD_create_category](./docs/DFD/create_category.png)
### View, update, and delete category
![DFD_view_update_delete_category](./docs/DFD/view_update_delete_category.png)

## Application Architecture Diagram
![Application Architecture Diagram](./docs/AAD/aad.png)

## User Stories
During the initial meeting we discussed the software and design requirements for the application. From there we developed user stories.

The application's proposed user stories were as follows:-
1. As a new user I want to be able to register my account to gain access to the application
2. As a registered user I want to be able to securely log in. 
3. As a user I want to be able to set up a budget.
4. As a user I want to be able to add an expense.
5. As a user I want to be able to record income I receive. 
6. As a user I want a visual representation of my finances in the form of a graph so I can pinpoint where my money is going.

Once we had planned the inner workings of the application, we began to refine each feature. We discussed what aspects of logging into the application were important, for example, security was paramount to ensuring users data and information was protected from outside sources. This would be require the application to have options for updating their password, and the ability for the session to time out after a certain period of inactivity, to ensure the users information was secure if the application was left unattended. 

Further, in order for the user to be able to be able to accurately track their expenses we needed them to be able to enter in income and expenses so the data can be displayed as a graph and the user can see what they spend their money on most. This feature needed to be able to be edited, deleted and updated. To be able to display the information as a graph, outlining where a user spends the most money we decided that we needed categories that would be unique to each user, and that they can set up on their own. We also thought that it would also be a good idea for the user to be able to set up a budget if they needed assistance in managing their finances and sticking to a dollar limit each month. 

From this discussion we further developed the below user stories, which are more robust and cover all the inner workings of the features in the application.

### Account registration, login and logout
* As a user I want to be able to securely log into the application so that my information can be accessed by only me

* As a new user, I want to be able to register an account by creating a username and password so that the application can remember me and my information

* As a registered user I want to be able to log in with my chosen username and password, so that the application can authenticate me and I can trust that my information is secure

* As a registered user I want to be able to update my password so that my information remains secure

* As a registered user I want to be able to obtain a new password so that I don't lose access to my account if I forget my details

* As a user I want to be able to create an account so I can access the features of the application and track my expenses and income.

### Customise expenses
* As a user, I want to be able to create custom categories so I can personalise the application to suit my needs

* As a use I want to be able to update my categories so I can make changes to them and rename them if I change my mind

* As a user I want to be able to view a list of all my categories so I can clearly see all of them in one place

* As a user I want to be able to view a list of all my categories so I can clearly see all of them in one place

* As a user I want to be able to delete my custom categories so I can delete any category which I no longer use or need

### Record expenses

* As a user, I want to be able to choose a custom category and record an expense against it so I can keep track of my spending in each category

* As a user I want to be able to edit each individual expense entry if I made an error entering information so I can correct the error

* As a user, I want to be able to delete the expense if I no longer need it to be recorded so I can get rid of it

* As a user I want to be able to enter a date on each transaction so I can compare my expenses against previous months

* As a user, I want to be able to set up recurring expenses so that I can focus on recording other transactions and keeping my finances in check

### View information as a graph

* As a user I want to be able to view my expenses as a graph so I can visually see my spending habits

* As a user I want to be able to customise the graph so I can compare expenses between months

* As a user I want to be able to compare my expenses against my income so I can improve my spending habits and stick to a budget

### Record income
* As a user, I want to be able to choose a custom category and record an income against it so I can keep track of my income in each category

* As a user I want to be able to edit each individual income entry so I can correct any mistakes I make

* As a user, I want to be able to delete an income entry if I no longer want that transaction recorded

* As a user I want to be able to enter a date when I receive an income so I can compare my income against previous months and reconcile the transactions against my bank statement

* As a user, I want to be able to set up recurring income so that I don't need to manually input transactions that occur regularly. 

## Wireframes for multiple standard screen sizes, created using industry standard software
During the initial meeting to discuss the requirements of the application, we also discussed color theme, application layout and other design requirements. We began working on the branding and logo for the client. After we had some sample logos, the direction was discussed and the overall look and feel. We wanted to incorporate a gold coin into the logo and chose green for the brand name. We re-worked the logo and sent two more variations for review, approval and final sign off. 

![Draft logo](./docs/design/logo-draft.png)
![Logo revised](./docs/design/Logov2.png)
![Mood board](docs/design/makinbacon-moodboard.png)


![Final Logo](./docs/design/Logo-final.svg)

During the design stage we drafted the layout of the application which included deciding on how many pages our application would have, how the user would navigate the application and where elements (logo and navigation buttons) would be placed on the page. We did a very basic sample of each page with boxes to represent where content would be placed. Below is the initial draft low-fidelity wireframes. 
![Register](./docs/Wireframes/Low-fidelity/Drafts/REGISTER–2.png)
![Register2](./docs/Wireframes/Low-fidelity/Drafts/REGISTER–3.png)
![Register3](./docs/Wireframes/Low-fidelity/Drafts/REGISTER.png)
![Register4](./docs/Wireframes/Low-fidelity/Approved/REGISTER–1.png)
![Login](./docs/Wireframes/Low-fidelity/Drafts/LOGIN–1.png)
![Login](./docs/Wireframes/Low-fidelity/Drafts/LOGIN–2.png)
![Login](./docs/Wireframes/Low-fidelity/Drafts/LOGIN.png)
![Home](./docs/Wireframes/Low-fidelity/Drafts/HOME–1.png)
![Home](./docs/Wireframes/Low-fidelity/Drafts/HOME.png)
![Income](./docs/Wireframes/Low-fidelity/Drafts/INCOME–1.png)
![Income](./docs/Wireframes/Low-fidelity/Drafts/INCOME.png)
![Transactions](./docs/Wireframes/Low-fidelity/Drafts/TRANSACTIONS–1.png)
![Transactions](./docs/Wireframes/Low-fidelity/Drafts/TRANSACTIONS–3.png)
![Charts](./docs/Wireframes/Low-fidelity/Drafts/CHARTS–1.png)
![Charts](./docs/Wireframes/Low-fidelity/Drafts/CHARTS–2.png)
![User](./docs/Wireframes/Low-fidelity/Drafts/USER–1.png)
![User](./docs/Wireframes/Low-fidelity/Drafts/USER–2.png)

The direction of the following wire frames was approved. These were the basis of the medium-fidelity wire frames which included more detail and design decisions. 

![Regsiter](./docs/Wireframes/Low-fidelity/Approved/register.png)
![Login](./docs/Wireframes/Low-fidelity/Approved/LOGIN–3.png)
![Home](./docs/Wireframes/Low-fidelity/Approved/HOME–2.png)
![transactions](./docs/Wireframes/Low-fidelity/Approved/TRANSACTIONS–2.png)
![transactions](./docs/Wireframes/Low-fidelity/Approved/CHARTS.png)

After another discussion about the direction of the application layout, we refined the wire frames including drafting the application's layout for a range of screen sizes. 

![Login-desktop](docs/Wireframes/med-fidelity/drafts/logindesktopdraft1.png)
![register](docs/Wireframes/med-fidelity/drafts/registermobdraft1.png)
![register mobile](docs/Wireframes/med-fidelity/drafts/registermobiledraft2.png)
![Transactions](docs/Wireframes/med-fidelity/drafts/transactions3.png)
![Transactions desktop](docs/Wireframes/med-fidelity/drafts/transactionsdekstopd2.png)

![Transactions desktop](docs/Wireframes/med-fidelity/drafts/transactionsdesktopd1.png)

![Transactions mobile](docs/Wireframes/med-fidelity/drafts/transactionsmobile1.png)

The following wire frames were the final versions of the medium fidelity layouts. In these wire frames we  included more details, what the navigation icons on the left hand side would look like, how the forms that the user would fill out appeared and decided how the user's information would be displayed the user. 

![Index desktop](docs/Wireframes/med-fidelity/approved/Indexdesktop – 1.png)
![Index tablet](docs/Wireframes/med-fidelity/approved/Indextablet.png)
![Index mobile](docs/Wireframes/med-fidelity/approved/IndexMobile.png)
![Register desktop](docs/Wireframes/med-fidelity/approved/REGISTERDESKTOP.png)
![Register mobile](docs/Wireframes/med-fidelity/approved/REGISTERMOBILE2.png)
![Login mobile](docs/Wireframes/med-fidelity/approved/REGISTERMOBILE3.png)
![register tablet](docs/Wireframes/med-fidelity/approved/REGISTERTABLET.png)
![login desktop](docs/Wireframes/med-fidelity/approved/LOGINDESKTOP.png)
![Home desktop](docs/Wireframes/med-fidelity/approved/HOMEDESKTOP.png)
![Home mobile](docs/Wireframes/med-fidelity/approved/HOMEMOBILE.png)
![Home tablet](docs/Wireframes/med-fidelity/approved/HOMETABLET.png)
![Transactions desktop](docs/Wireframes/med-fidelity/approved/TRANSACTIONSDESKTOP2.png)
![Transactions mobile](docs/Wireframes/med-fidelity/approved/TRANSACTIONSMOBILE2.png)
![Charts desktop](docs/Wireframes/med-fidelity/approved/CHARTSDESKTOP.png)
![Charts mobile](docs/Wireframes/med-fidelity/approved/CHARTSMOBILE.png)
![Charts tablet](docs/Wireframes/med-fidelity/approved/CHARTSTABLET.png)

After another discussion following finalisation of the medium fidelity  wire frames, we went into more detail about what would happen when a user clicked a button, hovered over the button etc. We decided to use the logo accent color to highlight the icon of the current page the user is on. Further, when hovering over buttons or links, we chose a lighter teal, to give the user visual feedback and notify them that there was an action that could be taken on that element. 

These wire frames included more detailed spacing between the elements, showed correct font sizing and spacing of all elements. We were aiming for a modern, minimal look and feel of the application, which utilised the use of white space. We chose rounded corners for the main content boxes as it was more sleek and stylish. We also added a drop shadow effect to the drop down menus, to show that it was on top of the elements behind it and so that users could see it was separate from other content on the page. Our goal for using modern and stylish design elements, was to appeal to a range of audiences, from young to old. We thought that by having a clean user interface it would be easier for users who were not as tech-savvy to navigate around the application.

![Register dekstop](docs/Wireframes/high-fidelity-wireframes/REGISTERDESKTOP.png)
![Register tablet](docs/Wireframes/high-fidelity-wireframes/REGISTERTABLET.png)
![Register mobile](docs/Wireframes/high-fidelity-wireframes/REGISTERMOBILE.png)
![Login desktop](docs/Wireframes/high-fidelity-wireframes/LOGINDESKTOP.png)
![Login tablet](docs/Wireframes/high-fidelity-wireframes/LoginTablet.png)
![Login mobile](docs/Wireframes/high-fidelity-wireframes/loginmobile.png)
![Home desktop](docs/Wireframes/high-fidelity-wireframes/HOMEDESKTOP.png)
![Home tablet](docs/Wireframes/high-fidelity-wireframes/HOMETABLET.png)
![Home mobile](docs/Wireframes/high-fidelity-wireframes/HOMEMOBILE.png)
![Home mobile - manage budget](docs/Wireframes/high-fidelity-wireframes/HOMEMOBILEMANAGEBUDGETDROPDOWN.png)
![Home mobile - view budget](docs/Wireframes/high-fidelity-wireframes/HOMEMOBILEVIEWBUDGETDROPDOWN.png)
![Expenses desktop](docs/Wireframes/high-fidelity-wireframes/EXPENSESDESKTOP.png)
![Expenses desktop drop down](docs/Wireframes/high-fidelity-wireframes/EXPENSESDESKTOPDROPDOWN.png)
![Expenses tablet](docs/Wireframes/high-fidelity-wireframes/TRANSACTIONS1.png)
![Expenses mobile](docs/Wireframes/high-fidelity-wireframes/TRANSACTIONSMOBILE2.png)
![Expenses mobile drop down](docs/Wireframes/high-fidelity-wireframes/TRANSACTIONSMOBILECATEGORYDROPDOWN.png)
![Mobile menu on click](docs/Wireframes/high-fidelity-wireframes/MOBILEMENUONCLICK.png)
![Income desktop](docs/Wireframes/high-fidelity-wireframes/INCOMEDESKTOP3.png)
![Income category drop down](docs/Wireframes/high-fidelity-wireframes/CATEGORYDROPDOWN–4.png)
![Income tablet](docs/Wireframes/high-fidelity-wireframes/LoginTablet.png)
![Income tablet](docs/Wireframes/high-fidelity-wireframes/Incomemobile.png)
![Charts desktop](docs/Wireframes/high-fidelity-wireframes/CHARTSDESKTOP.png)
![Charts tablet](docs/Wireframes/high-fidelity-wireframes/CHARTSTABLET.png)
![Charts mobile](docs/Wireframes/high-fidelity-wireframes/CHARTSMOBILE.png)

Lastly, the following is the final more refined version of the wire frames. The final version includes adding colour to the layout, representation of how drop-down menus, forms, navigation and charts are displayed to the user. 

![Index desktop](docs/Wireframes/final-wireframes/Index-desktop.png)
![Index tablet](docs/Wireframes/final-wireframes/INDEXTABLET.png)
![Index mobile](docs/Wireframes/final-wireframes/INDEXMOBILE.png)
![Register desktop](docs/Wireframes/final-wireframes/REGISTERDESKTOP.png)
![Register tablet](docs/Wireframes/final-wireframes/REGISTERTABLET.png)
![Register mobile](docs/Wireframes/final-wireframes/REGISTERMOBILE.png)
![Login desktop](docs/Wireframes/final-wireframes/LOGINDESKTOP.png)
![Login tablet](docs/Wireframes/final-wireframes/LOGINTABLET.png)
![Login mobile](docs/Wireframes/final-wireframes/LOGINMOBILE.png)
![Home desktop](docs/Wireframes/final-wireframes/HOMEDESKTOP.png)
![Home tablet](docs/Wireframes/final-wireframes/HOMETABLET.png)
![Home mobile](docs/Wireframes/final-wireframes/HOMEMOBILE.png)
![Home budget drop down](docs/Wireframes/final-wireframes/HOMEMOBILEMANAGEBUDGETDROPDOWN.png)
![Mobile budget view drop down](docs/Wireframes/final-wireframes/HOMEMOBILEVIEWBUDGETDROPDOWN.png)
![Expenses desktop](docs/Wireframes/final-wireframes/EXPENSESDESKTOP.png)
![Expense desktop drop down](docs/Wireframes/final-wireframes/EXPENSESDESKTOPDROPDOWN.png)
![Expenses tablet](docs/Wireframes/final-wireframes/TRANSACTIONS1.png)
![Expenses mobile](docs/Wireframes/final-wireframes/TRANSACTIONSMOBILE2.png)
![Expenses mobile drop-down](docs/Wireframes/final-wireframes/TRANSACTIONSMOBILECATEGORYDROPDOWN.png)
![Income desktop](docs/Wireframes/final-wireframes/INCOMEDESKTOP.png)
![Income tablet](docs/Wireframes/final-wireframes/Incometablet.png)
![Income mobile](docs/Wireframes/final-wireframes/Incomemobile.png)
![Income category drop down](docs/Wireframes/final-wireframes/CATEGORYDROPDOWN.png)
![Charts desktop](docs/Wireframes/final-wireframes/CHARTSDESKTOP.png)
![Charts tablet](docs/Wireframes/final-wireframes/CHARTSTABLET.png)
![Charts mobile](docs/Wireframes/final-wireframes/CHARTSMOBILE.png)
![Mobile menu on click](docs/Wireframes/final-wireframes/MOBILEMENUONCLICK.png)
![Button hover](docs/Wireframes/final-wireframes/button-hover.png)

### Application flow
![application flow](docs/design/desktop-flow.png)

## Screenshots of your Trello board throughout the duration of the project
### Trello board overview
![Trello_1](./docs/Trello_screenshots/overview/trello_overview_1.png)
![Trello_2](./docs/Trello_screenshots/overview/trello_overview_2.png)
![Trello_3](./docs/Trello_screenshots/overview/trello_overview_3.png)
### User stories
![User_story_1](./docs/Trello_screenshots/user_story/user_story_1.png)
![User_story_2](./docs/Trello_screenshots/user_story/user_story_2.png)
![User_story_3](./docs/Trello_screenshots/user_story/user_story_3.png)
![User_story_4](./docs/Trello_screenshots/user_story/user_story_4.png)
### Planning
![Planning_1](./docs/Trello_screenshots/planning/planning_1.png)
![Planning_2](./docs/Trello_screenshots/planning/planning_2.png)
![Planning_3](./docs/Trello_screenshots/planning/planning_3.png)
![Planning_4](./docs/Trello_screenshots/planning/planning_4.png)
### Design
![Design_1](./docs/Trello_screenshots/design/design_1.png)
![Design_2](./docs/Trello_screenshots/design/design_2.png)
![Design_3](./docs/Trello_screenshots/design/design_3.png)
![Design_4](./docs/Trello_screenshots/design/design_4.png)
### Front end
![Front_end_1](./docs/Trello_screenshots/front_end/front_end_1.png)
![Front_end_2](./docs/Trello_screenshots/front_end/front_end_2.png)
![Front_end_3](./docs/Trello_screenshots/front_end/front_end_3.png)
![Front_end_4](./docs/Trello_screenshots/front_end/front_end_4.png)
### Back_end
![Back_end_1](./docs/Trello_screenshots/back_end/back_end_1.png)
![Back_end_2](./docs/Trello_screenshots/back_end/back_end_2.png)
![Back_end_3](./docs/Trello_screenshots/back_end/back_end_3.png)
![Back_end_4](./docs/Trello_screenshots/back_end/back_end_4.png)


### Libraries used in Application
 The library we decided to use for our front end is React. React was created by Facebook and is a User Interface JavaScript library. React allows developers to construct interactive user interfaces. These views are dynamic when data in the application changes. React also has the ability to control internal state data. If and when there is a change to this data, the state will be updated. The JavaScript library React uses the Virtual Dom allowing developers to create web applications quickly and easily (Sufiyan, 2021). 

 In addition to React, we have also used the React Router DOM library, which permits us to hide and show various components together with linking to specific URLs. By using React Router DOM we are able to create a single page application (SPA). A SPA works within the browser and doesn't require the page to be reloaded when a user clicks a button. Instead, the user stays on the same page while a different page is rendered. This allows the application to flow seamlessly between pages and the user does not have to wait for each page to reload (Nikulina, 2020). 

To handle the back end of our application, we chose to use Rails, a library built to expand the functionality of the programming language, Ruby. Rails is designed to simplify Create, Read, Update and Delete functions even if the user has limited database knowledge. Rails also handles URL mapping in a simple way. 

Lastly, our application also uses APEX Charts. APEX Charts is a library that allows us to display data in a variety of different charts. APEX Charts is customizable and allows us to choose from a range of charts (pie, graph etc) and even allows us to use different graphs simultaneously to show the user a clear distinction between the graphs. Lastly, APEX Charts is responsive for a variety of mobile devices (Malek, 2020). We chose to use APEX charts to provide the user with visual feedback about their spending habits. 

For front end testing we chose to use Cypress. The reason we chose Cypress for our front end testing, because it is a pure JavaScript-based testing tool which we thought would work seamlessly with React, a JavaScript framework. To test our backend we chose to use RSpec. Rspec also works seamlessly with Ruby which assists a Test Driven Development approach to coding more productive. This was also used as well as Shoulda Matchers, a gem that allows us to run one line tests on the functionality of Rails. The benefit of Shoulda Matches also reduces the amount of errors in a test and reduces the size of the tests if they were to be written manually. For testing our backend the gem Database Cleaner was used to clean the ActiveRecord databases. This was used to ensure that each test started out as a clean state prior to testing. 

Rack-cors was used to assist with Cross-Origin Resource Sharing. By using this gem we were able to make cross domain AJAX calls between our front end deployment platform (Netlify) and backend platform (Heroku). The benefit of using Rack-cors is so that we don't have to use a different workaround such as JSONP. 

In order to build a secure platform for our web application, we utilised a gem called Bycrypt. Bycrypt is a library that assists us to salt and hash passwords which we used within our code to ensure that users information was secure. 

### task delegation methodology
Prior to starting the web application, we held and initial meeting where we discussed each others strengths and weaknesses. As Kate had experience with graphic design and designing to websites, we decided that she would handle the front end. Noe's skills were also in the front end however, we compromised and decided that he would handle the back-end and also assist with front end. Noe also had experience with adding charts to applications and he was keen to implement similar features into our web application. 

During the initial meeting we discussed the application requirements, which included an overview of the user stories and an assessment of each team members skills. We began the project by utilising [Trello](https://trello.com/b/RkPGYQV5/kate-noe). From here we entered in each task, using the labels to group each task into one of the following categories:-
1. Urgent and important;
1. Urgent and unimportant;
1. Non-urgent and unimportant; 

We also used one of trellos features wherre we could assign a user to each card, so we were aware of what task each team member was responsible for and which task at all times. In addition to assigning a card to a user, we also used deadlines and checklists to keep each team member on track. When choosing an appropriate team member for each task, we considered which person would be the best for the task, whether their skills aligned with the task and what task would be appealing to the individual. For each task we then set realistic, specific goals that, as mentioned above, had a completion due date. 

Once we mutually agreed on a clear direction for our web application and prior to commencing each task, we got together each day and held daily sprint planning meetings. This was conducted to make sure that each team member was aware of their objectives for that day, that each team member was aware of what they needed to do within the deadline. These meetings also acted as an opportunity for us to ask the other questions or help if needed. We also kept track of each others progress and kept each other accountable with informal discussions throughout the day. Once a task was completed, it then went to the other team-member for review. If the task was implementation of a feature, we used Git's source control to compare and check each others work. 

We made some minor changes to our application towards the end. We decided that the users budget would initially be set to 0. Initially our buttons on hover would be a lighter teal however we both decided it was more aesthetically pleasing if the border stayed teal but the inside went to white. This was more in line with our overall theme and gave the buttons a more modern look and feel. We also decided to include edit and delete buttons alongside each transaction on the home page, income and expenses page. This is so the user would be able to quickly amend a transaction if needed and delete one if it was made in error. 


### R10	A link (URL) to your deployed website
[Deployed website](https://frosty-curran-19ef5d.netlify.app/entrance)

### R11	A link to your GitHub repository (repo)
Ensure the repo is accessible by your educators!
[Frontend](https://github.com/KateAnisha/bacon-frontend)

[Backend](https://github.com/noe13hsu/making-bacon-api)



1. Sufiyan, T., 2021. What is ReactJS: Introduction To React and Its Features. [online] Simplilearn.com. Available at: <https://www.simplilearn.com/tutorials/reactjs-tutorial/what-is-reactjs> [Accessed 24 July 2021].

1. Nikulina, A., 2020. React Router. [online] Medium. Available at: <https://medium.com/@alenanikulina0/react-router-a219bb9cfae3> [Accessed 24 July 2021].

1. Malek, P., 2020. Everything You Need to Know about Ruby on Rails Web Application Framework. [online] Blog by Railsware. Available at: <https://railsware.com/blog/ruby-on-rails-guide/> [Accessed 24 July 2021].

