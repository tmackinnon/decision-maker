const db = require('../connection');

const deleteOption = function(queryParams) {
  const queryString = `
    DELETE FROM options
    WHERE id = $1;
  `

  return db.query(queryString, queryParams);
};

module.exports = { deleteOption };
