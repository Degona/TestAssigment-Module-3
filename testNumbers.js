const MathFunction = require("../src/processNumbers.js");
var arrNumbers =[0,0,0]
describe("GIVEN we coded the processNumbers function", () => {
  describe("WHEN invoking the function", () => {
    it("THEN it should return max and sum as cero", () => {
      const mathfunc = MathFunction(arrNumbers);
      expect(mathfunc.max).toBe(0);
      expect(mathfunc.sum).toBe(0);
    });
  });
});