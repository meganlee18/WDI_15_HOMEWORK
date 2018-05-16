const express = require('express')
const app = express()
const _ = require('lodash')
const request = require('request');

const PORT = 3000;

const compliments = [
  "You are beautiful no matter what they say",
  "Wow, you are a sight for sore eyes",
  "You are really good at this",
  "You deserve a drink... a really strong drink",
  "Yay! You are incredible",
  "Puppies love you",
  "You light up the room",
  "You're all that and a super-size bag of chips",
  "Thank you for being you"
]

const colors = ["#FFBF00","#0080FF","#01DF3A","#FF0080"]


app.listen(PORT,() => {
console.log(`listening on ${PORT}`)
})

// using templates & storing them in views/
app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
  const randomCompliments = _.sample(compliments)
  const randomColors = _.sample(colors)
  const name = "you"
  res.render("home", {name, randomCompliments, randomColors})
})

app.get('/:name', (req, res) => {
  const name = req.params.name;
  const randomCompliments = _.sample(compliments)
  const randomColors = _.sample(colors)
  res.render("home", {name, randomCompliments, randomColors})
})


