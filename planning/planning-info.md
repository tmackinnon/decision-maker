Planning Info
=========

## Resources

### User stories
  
As a ______, I want to _______, because ______.

* a user can create a poll with multiple choices
  * As an admin user, I want to create a poll with multiple choices because my group of friends needs help making a decision with many options

* each choice can have a title and optional description
  * As a voter, I want to be able to see and fully understand what I am voting for because it is important in helping me decide on my rankings.

* the creator must enter an email
  * As an admin user, I want to be able to have my account linked to an email because I will need to receive results later on, and to make sure I can protect my account.

* when a poll is finished being created, the user is given two links: an administrative link (which lets them access the results) and a submission link (which the user sends to their friends)
  * As an admin user I want to share my poll with my friends (via a submission link) because I want them to add their preferences
  * As an admin user I want to check the results (with an admin/results link) so that I can see the results of all my friends preferences

* the links are also sent to the creator via email (using mailgun)
  * As an admin user I want to receive an email with the submission link and admin/results link because I want to refer back to links if I need to send the poll to someone new or if I want to check the poll at a later time

* when a user visits the submission link, they enter their name if required and see a list of the choices for that poll
 * As a voter, I want to visit the submission link, enter my name and see the list of choices on the poll because I would like to vote on my favourite option(s)

* the user can rank the choices (by drag and drop, or some other method) and then submits the poll
  * As a voter, I want to rank my choices and submit the poll because I want my preferences included in the groups decision

* each time a submission is received, the creator is notified with an email (which includes the administrative link and a link to the results)
  * As an admin user, I want to know when others submit their rankings into my poll because I need to keep track of what other users want.

* the results are ranked using the Borda Count method: https://en.wikipedia.org/wiki/Borda_count
  * As a user, I want to see a winner get chosen using a simple scoring method that is solely based on user choices because it ensures an easy voting process that is also fair.

* note: this app does not follow the typical user authentication process: voters don't need to register or log in and the only way to access the polls or see the results is via links


### ERD


### Wireframes


### Routes

Homepage
GET /polls 

Create New Poll 
GET /polls/new 
POST /polls 

See Poll Results
GET /polls/:id/results 

Create New Vote
GET /polls/:id 
POST /polls/:id 

Delete Poll 
DELETE /polls/:id

Edit poll (Stretch goal) 
PUT /polls/:id


### Roles/Responsibilities
Tara 
Vote for Poll
- READ & ADD
- GET /polls/:id
- POST /polls/:id
- Polls_vote.ejs
- Drag and drop voting
- DB -  add responses
- Email notification to admin when options submitted 

Lily 
Results Table
- GET /polls/:id/results
- Polls_results.ejs
- DB - manipulate data and make borda count calculations to be rendered back 

DELETE /polls/:id 
 
Omar
Create Poll
- GET /polls/new
- POST /polls
- Polls_new.ejs
- Mailgun to email links to admin 
- DB - add data
- Submission forms 

Other
GET /polls

Stretch - Edit Polls 
PUT /polls/:id 

### Milestones
* Fri - Sun : Planning stage 
* Sun-Mon : Functionality
* Tue : Styling 
* Wed : Database 
* Thu - Last minute details, plan presentation and practice
* Fri - present! 
