var express = require('express');
var db = require('./queries');
var router = express.Router();
var app = express();

app.use(express.static('views'));
app.use(express.static('css'));

app.set('view engine', 'ejs');

app.get('/index', function (req, res) {
   res.render('index', {
     title: 'Hello'
   });
})

app.get('/', function (req, res) {
   res.send('Hello World');
})


app.get('/api/user', db.getAllUser);

module.exports = router;

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
