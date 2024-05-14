import { esCadenaVacia } from "./calculadorDeCadenas.js";

describe("Refactoring de calculaCadena()", () => {
    it("Refactoring de esCadenaVacia() donde debería devolver true para una cadena vacía", () => {
        expect(esCadenaVacia("")).toBe(true);
    });

});