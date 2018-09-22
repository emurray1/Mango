const express = require('express')
const app = express()
const port = 5000

app.get('/api/hello', function (req, res) {
  res.send('GET request to the homepage')
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))