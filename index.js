const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var app = express();
var myParser = require('body-parser')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/index'))
app.use(myParser.urlencoded({extended : true}));
app.post('/page-submitted', function(req, res) {
  console.log(req.body) 
}
         
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))


