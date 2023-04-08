const BigInteger = require("big-integer");

const PolyfillBigInt = value => {
  if (typeof value === "string") {
    const match = value.match(/^0([xo])([0-9a-f]+)$/i);
    if (match) {
      return BigInteger(match[2], match[1].toLowerCase() === "x" ? 16 : 8);
    }
  }
  return BigInteger(value);
};

module.exports = PolyfillBigInt
