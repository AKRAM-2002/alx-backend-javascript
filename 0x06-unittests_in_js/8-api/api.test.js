const request = require('request');
const { expect } = require('chai');
const { describe, it } = require('mocha');

describe('API', () => {
  it('should return "Welcome to the payment system"', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});