// Set up MySQL connection
var mysql = require("mysql");
var

//if (process.env.JAWSBD_URL) {
  //connection = mysql.createConnection(process.env.JAWSDB_URL);
//} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "burger_db"
  });
//};

// Make connection
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection to ORM
module.exports = connection;