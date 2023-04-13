const { query } = require('express');
const db = require('../connection');

const getRankings = function(queryParams) {
  const queryString = `
    SELECT polls.title AS poll_title, polls.description AS poll_description,options.title AS title, options.description AS description, SUM(rank) AS rank
    FROM rankings
    JOIN options ON options.id = option_id
    JOIN polls ON polls.id = poll_id
    WHERE poll_id = $1
    GROUP BY polls.title, polls.description, options.title, options.description
    ORDER BY rank;`

  return db
    .query(queryString, queryParams)
    .then(result => {
      console.log(result.rows);
      return result.rows;
    })
    .catch(err => {
      console.log(err.message);
    })
};

module.exports = { getRankings };

