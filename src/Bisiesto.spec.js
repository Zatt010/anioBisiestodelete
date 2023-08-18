import bisiesto from "./Bisiesto.js";

describe("Es bisiesto", () => {
    it("Deberia ser bisiesto si es divisible entre 4", () => {
      const result = bisiesto(2000)
      expect(result).toEqual(true)
    });
    it("no deberia ser bisiesto", () => {
        const result = bisiesto(2019 )
        expect(result).toEqual(false)
      });
  });
  