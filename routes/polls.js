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
router.post('/results/:id/delete', (req, res) => {
  let queryString = `
    DELETE FROM
  `
  let params = req.params.id;
})

// Create New Vote - TARA
// GET /polls/:id
// POST /polls/:id
// polls_vote.ejs



module.exports = router;
