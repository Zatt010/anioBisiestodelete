import bisiesto from "./Bisiesto.js";

describe("Es bisiesto", () => {
    it("Deberia ser bisiesto si es divisible entre 4 y no entre 100", () => {
      const result = bisiesto(2008)
      expect(result).toEqual(true)
    });
    it("no deberia ser bisiesto", () => {
        const result = bisiesto(1800 )
        expect(result).toEqual(false)
      });
  });
  