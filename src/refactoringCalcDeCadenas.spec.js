import { determinarVacioONulo, obtenerNumeros, sumarNumeros, sumarCadena } from "./calculadorDeCadenas.js";

describe("Refactoring de calculaCadena()", () => {
    it("Refactoring de determinarVacioONulo() donde debería devolver true para una cadena vacía", () => {
        expect(determinarVacioONulo("")).toBe(true);
    });

    it("Refactoring de determinarVacioONulo() donde debería devolver false para una cadena no vacía", () => {
        expect(determinarVacioONulo("1")).toBe(false);
    });

    it("Refactoring de determinarVacioONulo() donde debería devolver false para una cadena con espacios", () => {
        expect(determinarVacioONulo(" ")).toBe(false);
    });

    it("Se implmento el Refactoring de obtnerNumero() donde se devuelve un array con un solo número para una cadena con un solo número", () => {
        const cadena = "1";
        expect(obtenerNumeros(cadena)).toEqual(["1"]);
    });

    it("Refactoring de obtenerNumero() donde debería devolver un array con dos números para una cadena con dos números separados por coma", () => {
        const cadena = "1,2";
        expect(obtenerNumeros(cadena)).toEqual(["1", "2"]);
    });

    it("En el refactoring de obtenerNumero() se debería manejar correctamente una cadena con múltiples números separados por comas", () => {
        const cadena = "1,2,3,4";
        expect(obtenerNumeros(cadena)).toEqual(["1", "2", "3", "4"]);
    });

    it("Para el refactoring de sumarNumeros() se debería sumar los números en un array de números", () => {
        const numeros = ["1", "2", "3"];
        expect(sumarNumeros(numeros)).toEqual(6);
    });

    it("En el refactoring de sumarNumeros() se debería manejar correctamente un array con un solo número", () => {
        const numeros = ["5"];
        expect(sumarNumeros(numeros)).toEqual(5);
    });

    it("Al refactorizar con sumarNumeros() se debería devolver un mensaje de error si el array contiene un valor no numérico", () => {
        const numeros = ["1", "a", "3"];
        expect(sumarNumeros(numeros)).toEqual("Su cadena tiene un Not a Number");
    });

});