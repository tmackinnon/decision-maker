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
