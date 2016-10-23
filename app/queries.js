var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://postgres:132465@localhost:5432/postgres';
var db = pgp(connectionString);

// add query functions

module.exports = {
  getAllUser: getAllUser
};

function getAllUser(req, res, next) {
  db.any('SELECT * FROM USER_TAB')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL User'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}
