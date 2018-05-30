const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const mysql = require('mysql')
const path = require('path')


    var conn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'agof'
    });
    conn.connect()

app.use(bodyParser.urlencoded({extended: true}))

app.set('views', path.join(__dirname, '/www/views'));
app.use(express.static(__dirname + '/www'));
app.use(bodyParser.urlencoded({  //   body-parser to
    extended: true               //   parse data
}));                             //
app.use(bodyParser.json());      //



app.listen(3000, function() {
  console.log('listening on 3000')
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/www/index.html')
})


app.post('/insertSchool', (req, res) => {    
    var sql = "INSERT INTO escolas (escola_sigla, escola_nome) VALUES ('"+req.body.sigla+"','"+req.body.nome+"')";
    conn.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
    conn.query('SELECT * from escolas', function (err, rows, fields) {
        if (err) throw err
        rows.forEach(function(element) {
            console.log(element.escola_sigla)
        }, this);            
    })
})


var routes = require('./routes')(app);