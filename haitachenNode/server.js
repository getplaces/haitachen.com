const fs = require('fs')
const express = require('express')
const validator = require('validator');
const app = express()
const port = 3000


app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

app.post('/blessing', (req, res) => {
  const regexvalid = new RegExp(/^[a-zA-Z\u0590-\u05FF \u00a9\u00ae\u2000-\u3300\ud83c\ud000-\udfff\ud83d\ud000-\udfff\ud83e\ud000-\udfff,.:!?-]+$/);
  const isValid = regexvalid.test(req.body.new_line);
    if (isValid) {
      fs.appendFileSync('/var/www/haitachen.com/blessings.html', "\n" + "<div>" + req.body.new_line + "</div>"); 
      console.log(req.body.new_line)
    }
    else{
      console.log(req.body.new_line)
      console.log("is an invalid input")
    }
    res.redirect('http://haitachen.com/index.html#new_blessing_line')
  })

app.post('/', (req, res) => {
const regexvalid = new RegExp(/^[a-zA-Z\u0590-\u05FF \u00a9\u00ae\u2000-\u3300\ud83c\ud000-\udfff\ud83d\ud000-\udfff\ud83e\ud000-\udfff,.:!?-]+$/);
const isValid = regexvalid.test(req.body.new_line);
  if (isValid) {
    fs.appendFileSync('/var/www/haitachen.com/song.html', "\n" + "<div>" + req.body.new_line + "</div>"); 
    console.log(req.body.new_line)
  }
  else{
    console.log(req.body.new_line)
    console.log("is an invalid input")
  }
  res.redirect('http://haitachen.com/index.html#new_song_line')
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})