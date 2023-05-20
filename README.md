# Decision Maker

## Project Setup

Decision Maker is a multi-page application designed to simplify the group decision-making process for a user and their friends. With just a few clicks, users can create a new poll and specify their options. The application then generates two links, one for sharing with potential voters and the other for checking the current poll results. All tedious calculations are handled by our application, leaving you with more time to focus on other important matters.

## Screenshots

![Homepage](https://github.com/tmackinnon/decision-maker/blob/tm-styling-updates/docs/Home.png?raw=true)
![Add Option](https://github.com/tmackinnon/decision-maker/blob/tm-styling-updates/docs/Add-option.png?raw=true)
![Homepage](https://github.com/tmackinnon/decision-maker/blob/tm-styling-updates/docs/Vote.png?raw=true)

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information:
  - DB_HOST= {host-name}
  - DB_USER= {database-user}
  - DB_PASS= {database-password}
  - DB_NAME= {database-name}
  - DB_PORT= {database-port}
  - OUTLOOK_USER= {email address for sending emails}
  - OUTLOOK_PASS= {password of the email}
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
7. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
8. Visit `http://localhost:8080/`


## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
- Express
- Nodemailer
- Dotenv
- EJS
- SASS
