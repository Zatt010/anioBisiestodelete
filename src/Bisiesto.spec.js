import bisiesto from "./Bisiesto.js";

describe("Es bisiesto", () => {
    it("Deberia ser bisiesto si es divisible entre 400", () => {
      const result = bisiesto(2000)
      expect(result).toEqual(true)
    });
    it("no deberia ser bisiesto si no es divisible entre 400", () => {
        const result = bisiesto(2001)
        expect(result).toEqual(false)
      });
  });
  