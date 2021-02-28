const express = require('express');
const fs = require('fs');
const webserver = express();
const port = 3000;

webserver.use(express.static(__dirname+'/public'));

webserver.get('/', (req, res) => {
  // res.send('Hello World')
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('./index.html', null, function(error, data) {
    if (error) {
      res.writeHead(404);
      res.write('File Not Found');
    }
    else {
      res.write(data);
        }
    res.end();
    });
});

webserver.listen(port, () => {
  console.log(`Webserver is running on port: ${port}`)
})

module.exports = webserver;