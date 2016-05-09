# PollPanda

This ReadMe functions for both the PollPanda front and backend.  PollPanda is a web app that is the result of a full stack assignment.  PollPanda lets you take and submit quizzes that your friends can also enjoy.  The backend is deployed with Heroku and the repo can be found at https://github.com/susandaiute/PollPandaBACKEND.  Please note that 'questions' and 'polls' are used interchangeably.

## url

http://susandaiute.github.io/PollPandaFRONTEND

## Approach

My approach was to keep this a simple as possible in order to avoid not satisfying the requirements in time.  I began with setting up a quick HTML/CSS structure with Bootstrap which was easy and efficient.  Then, I built the backend and confirmed it was working with curl requests.  After making sure the user actions were functional, I began working on the poll submit section, beginning with POST requests.  After all of the CRUD actions were satisfied, I spent a short time on CSS.

## Technology
I used HTML, CSS, Bootstrap, Javascript, JQuery, and AJAX in the front end of this project. The backend was built using ActiveRecord and SQL.

## Wireframe

[Wireframe](./assets/images/wireframe)


## ERD

[ERD] (./assets/images/erd.jpg)

This ERD corresponds to the projected final product of this webapp with Users having many Questions (submitted polls) and Answers (answers of polls taken).  The current data structure can be found in the wireframe.  Upon deployment the data structure is that Users have many Questions, Questions have many Answers, and Users have many Answers through Questions.  For what the app is currently capable of, only Users having many Questions is necessary right now, making the back end still functional.  In the future I would like to change the data structure to multiple one-to-many relationships: Users having many Questions and also having many Answers, but Questions and Answers will be unrelated.  Semantically, this is a bit confusing so I will also change the name of the Questions table to Submitted_Polls and the Answers table to Answered_Polls.


## User Stories

As a user, I want...
         An easily navigable interface so that my user experience is intuitive and pleasant.
         An account that will keep my answers private so that my information is secure.
         A history of my quiz results that I can review and clear so that I can take them again.
         The ability to submit quizzes that I make so that my friends can take them.

As a developer I want...
        A backend that successfully communicates with the front end.
        A backend that deploys successfully with Heroku.
        A front end that deploys successfully with gh-pages.
        A data structure that allows for the saving of user data, poll answers, and submitted poll data.

## Obstacles And Future Development

The main obstacle I ran into doing this project was properly capturing the data in the CRUD actions.  Often I would find that 'data' was undefined.  I am not particularly comfortable with JQuery, but am improving.  The second obstacle was time.  I was only able to complete the 'Submit Poll' section and not the section where users take the polls which is the crux of the website.  This also makes part of my backend and data structure obsolete.  In the future I will be fleshing out the poll-answering section as well.  I would also like to make both the front and backend more semantic, by not using 'polls' and 'questions' interchangeably, but rather only using 'polls'.  Lastly, I would like to expand the CSS and clean the code up my making it more organized and also using Sass.

Taking into account the previous project, I worked more with a group and asked questions of fellow students.  I think this made the project much less stressful and more enjoyable.  The schedule structure I followed this time was efficient and I will be adhering to a similar structure in the next project.
