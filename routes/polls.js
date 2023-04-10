/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();

//HOMEPAGE
router.get('/', (req, res) => {
  res.render('index');
});

// Create new polls - OMAR
//GET /polls/new
router.get('/new', (req, res) => {
  res.render('polls_new');
});

router.post('/new', (req, res) => {
  console.log(req.body);
  res.redirect('/polls/new')
})

//POST /polls
//polls_new.ejs


// See Poll Results - LILY
// GET /polls/:id/results
// polls_results.ejs
//
// Delete Poll
// DELETE /polls/:id


// Create New Vote - TARA - added route
//data for testing:
const voteQueries = require('../db/queries/vote');

const pollsDb = {
  "a1": {
    title: "My Poll",
    emal: "a@a.com"
  },
 };
 const optionsDb = {
  "b1": {
    polls_id: "a1",
    title: "This is the first option",
    description: "this option is awesome"
  },
  "b2": {
    polls_id: "a1",
    title: "This is the second option",
    description: "this option is cool"
  },
  "b3": {
    polls_id: "a1",
    title: "This is the third option",
    description: "this option is okay"
  }
 };

// READ
// GET /polls/:id
router.get('/:id', (req, res) => {
  // starting process of connecting to db ignore this for now
  // const id = req.params.id
  // console.log('id', id)
  // voteQueries.getPollInfo(id)
  //   .then((data) => {
  //     res.render('polls_vote', data);
  //   })

  const templateVars = {
    pTitle: pollsDb.a1.title,
    optionsDb: optionsDb
  };
  res.render('polls_vote', templateVars);
});

//ADD
// POST /polls/:id
// polls_vote.ejs
router.post('/:id', (req, res) => {
  console.log('req.body', req.body) //output: {voter_name: Tara}
  res.redirect('/');
});


module.exports = router;
