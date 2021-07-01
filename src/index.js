const express = require('express')
const app = express()


app.get('/', async (req, res) => {
  res.send('Aprobado')
})

module.exports = app

