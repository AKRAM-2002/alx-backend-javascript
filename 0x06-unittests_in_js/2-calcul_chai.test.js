const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return 6 when adding 1.4 and 4.5', function () {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 0 when adding -1.4 and 1.4', function () {
      expect(calculateNumber('SUM', -1.4, 1.4)).to.equal(0);
    });
  });

  describe('SUBTRACT', function () {
    it('should return -4 when subtracting 4.5 from 1.4', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 0 when subtracting 1.4 from 1.4', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 1.4)).to.equal(0);
    });
  });

  describe('DIVIDE', function () {
    it('should return 0.2 when dividing 1.4 by 4.5', function () {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when dividing by 0', function () {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return Infinity when dividing 4.5 by 0', function () {
      expect(calculateNumber('DIVIDE', 4.5, 0)).to.equal('Error');
    });
  });

  describe('Invalid type', function () {
    it('should throw an error for invalid type', function () {
      expect(() => calculateNumber('MULTIPLY', 1, 2)).to.throw('Invalid type');
    });
  });
});
