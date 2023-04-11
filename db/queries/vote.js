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

const submitVotes = (object) => {
  const voter_name = object.voter_name;
  const optionIds = object.sortedIds;
  for (let i = 0; i < optionIds.length; i++) {
    const queryParams = [optionIds[i], voter_name, i];
    const queryString = `
    INSERT INTO rankings (option_id, voter_name, rank)
    VALUES ($1, $2, $3)
    RETURNING *;
    `;

    //ask if you need to return db ??? or have a promise like in lightbnb??
    db.query(queryString, queryParams)

  }

}


module.exports = { getPollInfo, submitVotes };



