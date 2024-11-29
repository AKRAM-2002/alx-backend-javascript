const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
    it('should return 4 when adding 1 and 3', function () {
        assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });

    it('should round and return 5 when adding 1 and 3.7', function () {
        assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    });
    
    it('should round and return 5 when adding 1.2 and 3.7', function () {
        assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });

    it('should round and return 6 when adding 1.5 and 3.7', function () {
        assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
    });

    it('should round negative numbers correctly', function () {
        assert.strictEqual(calculateNumber('SUBTRACT', -1.5, -2.6), -4);
    });

    it('should handle zeros correctly', function () {
        assert.strictEqual(calculateNumber('DIVIDE', 0, 0), 0);
    });

    it('should throw an error for invalid operation', function () {
        assert.throws(() => calculateNumber('INVALID', 1, 3), Error);
    });

    
});