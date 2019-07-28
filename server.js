//@ts-check
const express = require('express')
const app = express()
const port = 5000

app.use(express.static('build'))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('index.html')
})

app.listen(port, () => {
  console.log(`Portfolio is running on port ${port}`)
})