const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

require('dotenv').load();

var app = express();

var repeat = require('repeat');

// Allows for parsing on JSON/URL-Encoded Data
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => res.render('pages/index'));
app.listen(PORT, () => console.log(Listening on ${ PORT }));

app.post("/form-submitted", function(req, res) {
	console.log(req.body);
});

app.get("/transfer", function(req, res) {
	res.send('Transferred');
});
