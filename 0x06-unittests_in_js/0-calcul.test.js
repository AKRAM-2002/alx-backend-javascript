const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('should return 4 when adding 1 and 3', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should round and return 5 when adding 1 and 3.7', function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should round and return 5 when adding 1.2 and 3.7', function () {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should round and return 6 when adding 1.5 and 3.7', function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should round negative numbers correctly', function () {
    assert.strictEqual(calculateNumber(-1.5, -2.6), -4);
  });

  it('should handle zeros correctly', function () {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
});
