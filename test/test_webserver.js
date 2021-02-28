const request = require('supertest');
const webserver = require('../webserver.js');

describe('GET /', () => {
  it('Respond with Hello World', (done) =>  {
    request(webserver).get('/').expect('Hello World', done);
  });
});