const ejs = require('ejs')
var read = require('./www/routes/read'); 
var config = require('./www/routes/config'); 
module.exports = function(app){

app.set('view engine', 'ejs');
app.get('/read', read.show);
app.get('/config', config.show)
app.get('/config/escolas', config.showEscolas)
app.get('/escolas/lista', config.listaEscolas)
app.get('/escolas/adiciona', config.adicionaEscola)
app.post('/escolas/escolaAdd', config.doAdicionaEscolas)
}