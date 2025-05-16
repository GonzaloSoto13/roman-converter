// tests.js

// Use Chai's expect for assertions
const expect = chai.expect;

describe('integerToRoman()', function() {
  // Boundary and valid domain tests
  it('should convert 1 to "I"', function() {
    expect(integerToRoman(1)).to.equal("I");
  });

  it('should convert 4 to "IV"', function() {
    expect(integerToRoman(4)).to.equal("IV");
  });

  it('should convert 9 to "IX"', function() {
    expect(integerToRoman(9)).to.equal("IX");
  });

  it('should convert 58 to "LVIII"', function() {
    expect(integerToRoman(58)).to.equal("LVIII");
  });

  it('should convert 1994 to "MCMXCIV"', function() {
    expect(integerToRoman(1994)).to.equal("MCMXCIV");
  });

  it('should convert 3999 to "MMMCMXCIX"', function() {
    expect(integerToRoman(3999)).to.equal("MMMCMXCIX");
  });

  // Invalid inputs
  it('should throw error for 0 (below range)', function() {
    expect(() => integerToRoman(0)).to.throw("The number must be between 1 and 3999.");
  });

  it('should throw error for 4000 (above range)', function() {
    expect(() => integerToRoman(4000)).to.throw("The number must be between 1 and 3999.");
  });

  it('should throw error for negative number', function() {
    expect(() => integerToRoman(-1)).to.throw("The number must be between 1 and 3999.");
  });

  it('should throw error for non-numeric input', function() {
    expect(() => integerToRoman("abc")).to.throw();
  });
});

describe('romanToInteger()', function() {
  // Valid conversions
  it('should convert "I" to 1', function() {
    expect(romanToInteger("I")).to.equal(1);
  });

  it('should convert "IV" to 4', function() {
    expect(romanToInteger("IV")).to.equal(4);
  });

  it('should convert "IX" to 9', function() {
    expect(romanToInteger("IX")).to.equal(9);
  });

  it('should convert "LVIII" to 58', function() {
    expect(romanToInteger("LVIII")).to.equal(58);
  });

  it('should convert "MCMXCIV" to 1994', function() {
    expect(romanToInteger("MCMXCIV")).to.equal(1994);
  });

  it('should convert "MMMCMXCIX" to 3999', function() {
    expect(romanToInteger("MMMCMXCIX")).to.equal(3999);
  });

  // Invalid inputs
  it('should throw error for empty input', function() {
    expect(() => romanToInteger("")).to.throw("Input must be a valid Roman numeral.");
  });

  it('should throw error for non-Roman characters', function() {
    expect(() => romanToInteger("ABCD")).to.throw("The Roman numeral contains invalid characters.");
  });

  it('should throw error for malformed numeral "IIII"', function() {
    expect(() => romanToInteger("IIII")).to.throw("The Roman numeral is not in canonical form.");
  });

  it('should throw error for malformed numeral "VX"', function() {
    expect(() => romanToInteger("VX")).to.throw("The Roman numeral is not in canonical form.");
  });

  it('should throw error for malformed numeral "IL"', function() {
    expect(() => romanToInteger("IL")).to.throw("The Roman numeral is not in canonical form.");
  });

  it('should throw error for non-string input (e.g., number)', function() {
    expect(() => romanToInteger(123)).to.throw("Input must be a valid Roman numeral.");
  });
});
