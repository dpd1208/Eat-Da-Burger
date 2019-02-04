// Set up MySQL connection
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "d13xat1hwxt21t45.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "hw1wvzb3d6hz5jwd",
    password: "ilr3m6c1n2jh4z4f",
    database: "ho9nmd5qq5rdb601"
  });
};

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