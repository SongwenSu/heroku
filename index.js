const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var app = express();
var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/index'))
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
app.post('/form-submitted', function(req,res) {
  console.log(req.body);
});

