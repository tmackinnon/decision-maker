const express = require('express');
const router = express.Router();
const { insertOption, getOptions } = require('../db/queries/create_option');
const { deleteOption } = require('../db/queries/delete_option');



router.get('/:id', (req, res) => {
  const pollId = req.params.id;
  getOptions(pollId)
    .then(options => res.render('add_options.ejs', [options, pollId]))
});

router.post('/', (req, res) => {
  if (!req.body.title) {
    // todo
    return console.log('not ok');
  }

  const title = req.body.title;
  const description = (!req.body.description) ? null : req.body.description;
  const pollId = req.body.pollId;

  insertOption(pollId, title, description)
    .then(option => res.json(option));
});

router.post('/delete/:id', (req, res) => {
  const optionId = req.params.id;
  console.log("Click!");
  deleteOption([optionId]);
})

module.exports = router;
