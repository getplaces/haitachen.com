const fs = require('fs')
const express = require('express')
const app = express()
const port = 3000


app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

app.post('/', (req, res) => {
  fs.appendFileSync('/var/www/haitachen.com/song.html', "\n" + "<div>" + req.body.newLine + "</div>");
  console.log(req.body.newLine)
  res.redirect('http://haitachen.com')
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})