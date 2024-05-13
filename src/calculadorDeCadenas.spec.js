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
  });

  