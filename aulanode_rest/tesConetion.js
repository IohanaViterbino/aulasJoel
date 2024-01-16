const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "usbw",
  database: "constestlink_bd"
});
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM funcionarios", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
        