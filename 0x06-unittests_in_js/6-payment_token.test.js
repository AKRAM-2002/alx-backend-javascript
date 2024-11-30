const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with the correct object when success is true', (done) => {
    getPaymentTokenFromAPI(true).then((response) => {
      expect(response).to.deep.equal({ data: 'Successful response from the API' });
      done(); // Marks the test as complete
    }).catch((err) => {
      done(err); // Fail the test if an error occurs
    });
  });
});
