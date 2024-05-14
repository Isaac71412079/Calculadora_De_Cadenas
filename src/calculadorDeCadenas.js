function esCadenaVacia(cadena){
    let vacio = cadena === "" || cadena === undefined;
    return vacio;
}

function obtenerNumeros(cadena) {
    return cadena.split(",");
}

function calcularCadena(cadena) {
    if (esCadenaVacia(cadena)) {
        return 0;
    }

    let numeros = obtenerNumeros(cadena);
    let sumaDeLaCadena = 0;

    for (let i = 0; i < numeros.length; i++) {
        let numero = Number(numeros[i]);
        if (isNaN(numero)) {
            return "Su cadena tiene un Not a Number";
        }
        sumaDeLaCadena += numero;
    }

    return sumaDeLaCadena;
}

export { esCadenaVacia, obtenerNumeros, calcularCadena };