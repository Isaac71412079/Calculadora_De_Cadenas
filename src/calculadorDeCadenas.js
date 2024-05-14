function esCadenaVacia(cadena){
    let vacio = cadena === "" || cadena === undefined;
    return vacio;
}

function obtenerNumeros(cadena) {
    return cadena.split(/[,|-]/); // Esta es una expresión para dividr por coma o guion.
}

function sumarNumeros(numeros) {
    let suma = 0;

    for (const num of numeros) {
        const numero = Number(num);
        if (isNaN(numero)) {
            return "Su cadena tiene un Not a Number";
        }
        suma += numero;
    }

    return suma;
}

function calcularCadena(cadena) {
    if (esCadenaVacia(cadena)) {
        return 0;
    }

    let numeros = obtenerNumeros(cadena);
    return sumarNumeros(numeros);
}

export { esCadenaVacia, obtenerNumeros, sumarNumeros, calcularCadena };