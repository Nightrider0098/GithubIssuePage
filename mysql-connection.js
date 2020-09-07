var mysql = require('mysql');


var con = mysql.createConnection({
  host: "sql12.freemysqlhosting.net",
  user: "sql12364268",
  password: "rdYBkuSicW",
  database: "sql12364268",
  multipleStatements: true
});


con.connect(function (err) {
  if (err) return console.log("failed to connect to book_store pls download mysql", err);

  else return console.log("connection establish with Datebase!!!!");
});

module.exports = con;

