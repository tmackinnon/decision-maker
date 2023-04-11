const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.render('add_options.ejs', { id });
})

router.post('/', (req, res) => {
  console.log(req.body);
  const pollId = req.body.pollId;
  // add to db
  // send back sample data
  const id = 43;
  const option = {title: req.body.title, description: req.body.description, id};
  res.json(option);
})
module.exports = router;
