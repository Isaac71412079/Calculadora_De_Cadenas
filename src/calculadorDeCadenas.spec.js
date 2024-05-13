import calcularCadena from "./calculadorDeCadenas";

describe("Calcular Cadenas", () => {
    it("Implementación inicial: devuelve 0 para cadena vacía", () => {
        let cadena = "";
      expect(calcularCadena(cadena)).toEqual(0);
    });

    it("Se devuelve 0 al no insertar niguna cadena en la función", () => {
      expect(calcularCadena()).toEqual(0);
    });
  });

  