/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const { createPoll, addLinks } = require('../db/queries/create_poll');

//HOMEPAGE
router.get('/', (req, res) => {
  res.render('index');
});

// Create new polls - OMAR

//GET /polls/new
router.get('/new', (req, res) => {
  res.render('create_poll');
});

router.post('/new', (req, res) => {
  const { email , title, description } = req.body;

  if(!email || !title) {
    // ToDo
    console.log('didn\'t provide data');
    return res.redirect('/polls/new');
  }
  createPoll(email, title, description)
  .then(id => addLinks(`http://localhost:8080/polls/${id}/results`, `http://localhost:8080/polls/${id}`, id))
  .then(id => res.redirect(`/options/${id}`))
});


// See Poll Results - LILY
// Results page
const winningOption = {};

const optionDatabase = {
  temp1: {
    title: "lorem ipsum",
    description: "dolor sit amet"
  },
  temp2: {
    title: "lorem ipsum",
    description: "dolor sit amet"
  },
  temp3: {
    title: "lorem ipsum",
    description: "dolor sit amet"
  },
  temp4: {
    title: "lorem ipsum",
    description: "dolor sit amet"
  },
  temp5: {
    title: "lorem ipsum",
    description: "dolor sit amet"
  }
};

const pollsDatabase = {};

router.get('/results', (req, res) => {
  const templateVars = {
    winningOption,
    optionDatabase,
    pollsDatabase
  };

  res.render("polls_results", templateVars);
});

// Delete Poll
// DELETE /polls/:id

// Create New Vote - TARA - added route
const voteQueries = require('../db/queries/vote');

// READ
// GET /polls/:id
router.get('/:id', (req, res) => {
  const id = req.params.id

  //grab info needed from db
  voteQueries.getPollInfo(id)
    .then((data) => {
        const templateVars = {
          pollId: id,
          pollTitle: data[0]['ptitle'],
          pollDesc: data[0]['pdesc'],
          options: data
        };

        res.render('polls_vote', templateVars);;
      })
});

//ADD
// POST /polls/:id
// polls_vote.ejs
router.post('/:id', (req, res) => {
  voteQueries.saveVotes(req.body);
  res.redirect('/');
});


module.exports = router;
