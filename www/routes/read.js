const mysql = require('mysql')


var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'agof'
});
conn.connect()

exports.show = function (req, res) {
  var query = conn.query('SELECT * FROM escolas', function (err, rows) {
    if (err)
      console.log("Error Selecting : %s ", err);

    console.log(rows[0].escola_id);
    res.render('file', { page_title: "Test Table", data: rows });
  });
};