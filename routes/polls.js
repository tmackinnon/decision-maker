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


// Create New Vote - TARA
// GET /polls/:id
// POST /polls/:id
// polls_vote.ejs



module.exports = router;
