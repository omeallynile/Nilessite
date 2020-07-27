
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.set("view engine", "ejs");
// routes
const home = require('./routes/index')
const work = require('./routes/work')
const personal = require('./routes/personal')



// use routes
app.use('/', home)
app.use('/work', work)
app.use('/personal', personal)



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))