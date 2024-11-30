const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('API tests', () => {
  describe('GET /', () => {
    it('should return "Welcome to the payment system"', async () => {
      const res = await request(app).get('/');
      expect(res.status).to.equal(200);
      expect(res.text).to.equal('Welcome to the payment system');
    });
  });

  describe('GET /cart/:id', () => {
    it('should return correct message for valid numeric :id', async () => {
      const res = await request(app).get('/cart/12');
      expect(res.status).to.equal(200);
      expect(res.text).to.equal('Payment methods for cart 12');
    });

    it('should return 404 for non-numeric :id', async () => {
      const res = await request(app).get('/cart/hello');
      expect(res.status).to.equal(404);
    });

    it('should return 404 for missing :id', async () => {
      const res = await request(app).get('/cart/');
      expect(res.status).to.equal(404);
    });
  });

  describe('Invalid routes', () => {
    it('should return 404 for an unknown route', async () => {
      const res = await request(app).get('/unknown');
      expect(res.status).to.equal(404);
    });
  });
});
