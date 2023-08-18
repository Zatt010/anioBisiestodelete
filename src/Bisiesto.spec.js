import bisiesto from "./Bisiesto.js";

describe("Es bisiesto", () => {
    it("Deberia ser bisiesto si es divisible entre 400 y entre 100", () => {
      const result = bisiesto(2000)
      expect(result).toEqual(true)
    });
    it("no deberia ser bisiesto si es divisible entre 100 y no entre 400", () => {
        const result = bisiesto(1800 )
        expect(result).toEqual(false)
      });
  });
  