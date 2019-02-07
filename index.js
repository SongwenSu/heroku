const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var app = express();
var myParser = require('body-parser')

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

app.use(myParser.urlencoded({extended : true}));
app.post('/page-submitted', function(req, res) {
  console.log(req.body) 
}
