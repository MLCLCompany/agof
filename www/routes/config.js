const mysql = require('mysql')
const path = require('path')

var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'agof'
});
conn.connect()

module.exports = {
    show:  function (req, res) {
        res.sendFile(path.resolve(__dirname + '/../views/stats.html'))
    },
    showEscolas:  function (req, res) {
        res.render('escolas/escolas');
    },
    adicionaEscola:  function (req, res) {
        res.render('escolas/adicionarEscola');
    },
    listaEscolas: function (req, res) {
      var query = conn.query('SELECT * FROM escolas', function (err, rows) {
        if (err)
          console.log("Error Selecting : %s ", err);
        res.render('escolas/listaEscolas', {data: rows });
      });
    },
    doAdicionaEscolas: function (req, res){
      console.log("DoAdicionaEscolas");
      var sql = "INSERT INTO escolas (escola_sigla, escola_nome) VALUES ('"+req.body.sigla+"','"+req.body.nome+"')";
      conn.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
          var query = conn.query('SELECT * FROM escolas', function (err, rows) {
            if (err)
              console.log("Error Selecting : %s ", err);
            res.render('escolas/listaEscolas', {data: rows });
          });
      });
    }
};