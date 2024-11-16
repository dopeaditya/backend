require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram',(req, res) => {
    res.send('aadi_one_9')
})

app.get('/login', (req, res) => {
    res.send('<h1>Login with our sports app</h1>')
})

app.get('/cricket', (req, res) => {
    res.send('<h1>Virat Kohli did you mean him when you said cricket?</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})