import calcularCadena from "./calculadorDeCadenas";

describe("Calcular Cadenas", () => {
    it("Implementación inicial: devuelve 0 para cadena vacía", () => {
        let cadena = "";
        expect(calcularCadena(cadena)).toEqual(0);
    });

    it("Se devuelve 0 al no insertar ninguna cadena en la función", () => {
        expect(calcularCadena()).toEqual(0);
    });

    it("Se devuelve 1 al insertar el numero 1 cadena en la función", () => {
        let cadena = "1";
        expect(calcularCadena(cadena)).toEqual(1);
    });

    it("Se devuelve 8 al insertar el numero 8 cadena en la función", () => {
        let cadena = "8";
        expect(calcularCadena(cadena)).toEqual(8);
    });

    it("Se implementa la funcionalidad de sumar dos numeros en la cadena ejemplo: '1,1' => 2", () => {
        let cadena = "1,1";
        expect(calcularCadena(cadena)).toEqual(2);
    });

    it("Se implementa la funcionalidad de sumar dos numeros en la cadena ejemplo: '21,14' => 35", () => {
        let cadena = "21,14";
        expect(calcularCadena(cadena)).toEqual(35);
    });

    it("Devuelve mensaje de error para una cadena con caracteres no numéricos", () => {
        let cadena = "1,a";
        expect(calcularCadena(cadena)).toBe("Su cadena tiene un Not a Number");
    });


  });

  