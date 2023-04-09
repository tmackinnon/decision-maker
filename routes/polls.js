/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

//HOMEPAGE
router.get('/', (req, res) => {
  res.render('index');
});

// Create new polls - OMAR
//GET /polls/new
//POST /polls
//polls_new.ejs


// See Poll Results - LILY
// GET /polls/:id/results
// polls_results.ejs
//
// Delete Poll
// DELETE /polls/:id


// Create New Vote - TARA - added route
// READ
// GET /polls/:id
const pollsDb = {
  "1": {
    title: "My Poll",
    emal: "a@a.com"
  },
};
const optionsDb = {
  "1": {
    polls_id: 1,
    title: "This is the first option",
    description: "this option is awesome"
  },
  "2": {
    polls_id: 1,
    title: "This is the second option",
    description: "this option is cool"
  },
  "3": {
    polls_id: 1,
    title: "This is the third option",
    description: "this option is okay"
  },
}

router.get('/:id', (req, res) => {
  const templateVars = {
    id: pollsDb.id,
    pTitle: pollsDb.title,
    oTitle: optionsDb.title,
    oDesc: optionsDb.description
  };
  res.render('polls_vote', templateVars);
});

//ADD
// POST /polls/:id
// polls_vote.ejs
router.post('/:id', (req, res) => {
  res.render('polls_vote');
});


module.exports = router;
