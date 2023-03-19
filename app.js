const express = require('express')
const exphbs = require('express-handlebars')

require('./config/mongoose')

const routes = require('./routes')
const app = express()

app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true}))
app.use(routes)

app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})