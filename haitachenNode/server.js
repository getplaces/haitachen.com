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
  console.log(req.body)
  res.redirect('http://haitachen.com')
  fs.appendFileSync('../song', "\n" + req.body.newLine);
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})