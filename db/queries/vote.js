const db = require('../connection');

//example
const getPollInfo = (id) => {
  const queryString = `
  SELECT options.title as oTitle, options.description as oDesc, options.id, polls.title as pTitle, polls.description as pDesc
  FROM options
  JOIN polls ON polls.id = poll_id
  WHERE polls.id = $1;`

  return db
    .query(queryString, [id])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getPollInfo };



