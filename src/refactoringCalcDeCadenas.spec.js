import { esCadenaVacia, obtenerNumeros, calcularCadena } from "./calculadorDeCadenas.js";

describe("Refactoring de calculaCadena()", () => {
    it("Refactoring de esCadenaVacia() donde debería devolver true para una cadena vacía", () => {
        expect(esCadenaVacia("")).toBe(true);
    });

    it("Refactoring de esCadenaVacia() donde debería devolver false para una cadena no vacía", () => {
        expect(esCadenaVacia("1")).toBe(false);
    });

    it("Refactoring de esCadenaVacia() donde debería devolver false para una cadena con espacios", () => {
        expect(esCadenaVacia(" ")).toBe(false);
    });

});