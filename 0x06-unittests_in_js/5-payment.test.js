const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleWatcher;

  beforeEach(() => {
    if (!consoleWatcher) {
      consoleWatcher = sinon.spy(console, 'log');
    }
  });

  afterEach(() => {
    consoleWatcher.resetHistory();
  });

  it('sendPaymentRequestToApi(100, 20) logs "The total is: 120" to the console', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleWatcher.calledWith('The total is: 120')).to.be.true;
    expect(consoleWatcher.calledOnce).to.be.true;
  });

  it('sendPaymentRequestToApi(10, 10) logs "The total is: 20" to the console', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleWatcher.calledWith('The total is: 20')).to.be.true;
    expect(consoleWatcher.calledOnce).to.be.true;
  });
});
