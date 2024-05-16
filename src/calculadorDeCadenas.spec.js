import { esCadenaVacia, obtenerNumeros, sumarNumeros,sumarCadena } from "./calculadorDeCadenas";


describe("Calcular Cadenas", () => {
    it("Implementación inicial: devuelve 0 para cadena vacía", () => {
        let cadena = "";
        expect(sumarCadena(cadena)).toEqual(0);
    });

    it("Se devuelve 0 al no insertar ninguna cadena en la función", () => {
        expect(sumarCadena()).toEqual(0);
    });

    it("Se devuelve 1 al insertar el numero 1 cadena en la función", () => {
        let cadena = "1";
        expect(sumarCadena(cadena)).toEqual(1);
    });

    it("Se devuelve 8 al insertar el numero 8 cadena en la función", () => {
        let cadena = "8";
        expect(sumarCadena(cadena)).toEqual(8);
    });

    it("Se implementa la funcionalidad de sumar dos numeros en la cadena ejemplo: '1,1' => 2", () => {
        let cadena = "1,1";
        expect(sumarCadena(cadena)).toEqual(2);
    });

    it("Se implementa la funcionalidad de sumar dos numeros en la cadena ejemplo: '21,14' => 35", () => {
        let cadena = "21,14";
        expect(sumarCadena(cadena)).toEqual(35);
    });

    it("Devuelve mensaje de error para una cadena con caracteres no numéricos", () => {
        let cadena = "1,a";
        expect(sumarCadena(cadena)).toBe("Su cadena tiene un Not a Number");
    });

    it("Se implementa la funcionalidad de sumar tres numeros en la cadena ejemplo: '21,14,7' => 42", () => {
        let cadena = "21,14,7";
        expect(sumarCadena(cadena)).toEqual(42);
    });

    it("Se implementa la funcionalidad de sumar varios números en la cadena ejemplo: '1,2,4,8' => 15", () => {
        let cadena = "1,2,4,8";
        expect(sumarCadena(cadena)).toEqual(15);
    });

    it("Se implementa la funcionalidad de sumar números separados por guion en la cadena ejemplo: '1-2,3' => 6", () => {
        let cadena = "1-2,3";
        expect(sumarCadena(cadena)).toEqual(6);
    });

    it("Se hizo la prueba de sumar números dos numeros separados por guion en la cadena ejemplo: '1-2,3,1-3' => 10", () => {
        let cadena = "1-2,3,1-3";
        expect(sumarCadena(cadena)).toEqual(10);
    });

    it("Se implementa la funcionalidad de especificar delimitador, ejemplo: '//[;] 6;7;4' => 17", () => {
        let cadena = "//[;] 6;7;4";
        expect(sumarCadena(cadena)).toEqual(17);
    });

    it("Se implementa la funcionalidad de especificar delimitador, ejemplo: '//[;] 6,3-2;1' => 12", () => {
        let cadena = "//[;] 6,3-2;1";
        expect(sumarCadena(cadena)).toEqual(12);
    });

    it("Se implementa la funcionalidad de sumar números con delimitadores con guion y coma, ejemplo: '1-2,3,4-5' => 15", () => {
        let cadena = "1-2,3,4-5";
        expect(sumarCadena(cadena)).toEqual(15);
    });

    it("Se implementa la funcionalidad de ignorar números mayores a 1000, ejemplo: '2,1001' => 2", () => {
        let cadena = "2,1001";
        expect(sumarCadena(cadena)).toEqual(2);
    });
    
    it("Se implementa la funcionalidad de ignorar números mayores a 1000 con delimitadores, ejemplo: '2-1001,3' => 5", () => {
        let cadena = "2-1001,3";
        expect(sumarCadena(cadena)).toEqual(5);
    });

    //OPCIONALES:
    it("Se implementa la PRUEBA de delimitador de cualquier longitud, ejemplo: '//[***] 1***2***3' => 6", () => {
        let cadena = "//[***] 1***2***3";
        expect(sumarCadena(cadena)).toEqual(6);
    });

    it("Se implementa otra PRUEBA de delimitador de cualquier longitud con caracteres especiales, ejemplo: '//[!!!] 1!!!2!!!3' => 6", () => {
        let cadena = "//[!!!] 1!!!2!!!3";
        expect(sumarCadena(cadena)).toEqual(6);
    });

    // Nueva prueba para múltiples delimitadores
    it("Se implementa la funcionalidad de múltiples delimitadores, ejemplo: '//[*][%] 1*2%3,7-9' => 22", () => {
        let cadena = "//[*][%] 1*2%3,7-9";
        expect(sumarCadena(cadena)).toEqual(22);
    });


  });

  