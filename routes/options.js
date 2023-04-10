const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
  res.render('add_options.ejs');
})

module.exports = router;
