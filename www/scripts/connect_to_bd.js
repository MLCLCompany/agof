var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'agof'
});

alert("AAA");
connection.connect()

connection.query('SELECT * from jogos', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].jogo_id)
})

connection.end()
