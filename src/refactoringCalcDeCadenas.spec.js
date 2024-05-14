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

    it("Se implmento el Refactoring de obtnerNumero() donde se devuelve un array con un solo número para una cadena con un solo número", () => {
        const cadena = "1";
        expect(obtenerNumeros(cadena)).toEqual(["1"]);
    });

});