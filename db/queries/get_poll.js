const db = require('../connection');

const getPoll = function(id) {
  const queryString = `
  SELECT * FROM polls where id = $1`;
  return db.query(queryString, [id])
    .then(poll => poll.rows[0])
}

module.exports = { getPoll };
