function esCadenaVacia(cadena){
    let vacio = cadena === "" || cadena === undefined;
    return vacio;
}

function esExpresionRegular(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Caracteres especiales en expresiones regulares
}

function obtenerNumeros(cadena) {
    let delimitador = /[,|-]/; // Esta es una expresión para dividr por coma o guion.

    if (cadena.startsWith("//[")) {
        const delimitadorFin = cadena.indexOf("] ");
        const delimitadores = cadena.substring(2, delimitadorFin + 1);
        const delimitadoresArray = delimitadores.match(/\[([^\]]+)\]/g).map(d => d.slice(1, -1));
        delimitador = new RegExp(delimitadoresArray.map(d => esExpresionRegular(d)).join("|") + "|,|-");
        cadena = cadena.substring(delimitadorFin + 2);
    }

    return cadena.split(delimitador);
}

function sumarNumeros(numeros) {
    let suma = 0;

    for (const num of numeros) {
        const numero = Number(num);
        if (isNaN(numero)) {
            return "Su cadena tiene un Not a Number";
        }
        if (numero <= 1000) {
            suma += numero;
        }
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