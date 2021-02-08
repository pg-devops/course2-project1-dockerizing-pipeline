const express = require('express')
const webserver = express()
const port = 3000

webserver.get('/', (req, res) => {
  res.send('Hello World')
})

webserver.listen(port, () => {
  console.log(`Webserver is running on port: ${port}`)
})

module.exports = webserver;