const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  it('should stub Utils.calculateNumber and verify the behavior', function () {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleSpy = sinon.spy(console);

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(calculateNumberStub.callCount).to.equal(1);
    expect(consoleSpy.log.calledWithExactly('The total is: 10')).to.be.true;
    expect(consoleSpy.log.callCount).to.equal(1);
    
    calculateNumberStub.restore();
    consoleSpy.log.restore();
  });
});
