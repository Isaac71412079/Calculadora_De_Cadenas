import { esCadenaVacia, obtenerNumeros, sumarNumeros,calcularCadena } from "./calculadorDeCadenas";


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

    it("Se implementa la funcionalidad de sumar tres numeros en la cadena ejemplo: '21,14,7' => 42", () => {
        let cadena = "21,14,7";
        expect(calcularCadena(cadena)).toEqual(42);
    });

    it("Se implementa la funcionalidad de sumar varios números en la cadena ejemplo: '1,2,4,8' => 15", () => {
        let cadena = "1,2,4,8";
        expect(calcularCadena(cadena)).toEqual(15);
    });

    it("Se implementa la funcionalidad de sumar números separados por guion en la cadena ejemplo: '1-2,3' => 6", () => {
        let cadena = "1-2,3";
        expect(calcularCadena(cadena)).toEqual(6);
    });

    it("Se hizo la prueba de sumar números dos numeros separados por guion en la cadena ejemplo: '1-2,3,1-3' => 10", () => {
        let cadena = "1-2,3,1-3";
        expect(calcularCadena(cadena)).toEqual(10);
    });

    it("Se implementa la funcionalidad de especificar delimitador, ejemplo: '//[;] 6;7;4' => 17", () => {
        let cadena = "//[;] 6;7;4";
        expect(calcularCadena(cadena)).toEqual(17);
    });

    it("Se implementa la funcionalidad de especificar delimitador, ejemplo: '//[;] 6,3-2;1' => 12", () => {
        let cadena = "//[;] 6,3-2;1";
        expect(calcularCadena(cadena)).toEqual(12);
    });
  });

  