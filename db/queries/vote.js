const { query } = require('express');
const db = require('../connection');

//example
const getPollInfo = (id) => {
  const queryString = `
  SELECT options.title as otitle, options.description as odesc, options.id, polls.title as ptitle, polls.description as pdesc
  FROM options
  JOIN polls ON polls.id = poll_id
  WHERE polls.id = $1;`

  return db
    .query(queryString, [id])
    .then(data => {
      return data.rows;
    });
};

//req.body= { sortedIds: [ '2', '1', '3' ], voter: 'Tara' }

// const submitVotes = (object) => {
//   const voter_name = object.voter;
//   const optionIds = object.sortedIds; //[ '2', '1', '3' ]
//   for (const options of optionIds) {

//   }
//   const queryParams = [];
//   const queryString = `
//   INSERT INTO rankings (option_id, voter_name, rank)
//   VALUES ($1, $2, $3)
//   RETURNING *;
//   `;

//   return db
//     .query(queryString, queryParams)
//     .then()

// }


module.exports = { getPollInfo };



