function sumarCadena(cadena) {
    if (determinarVacioONulo(cadena)) {
        return 0;
    }

    let numeros = obtenerNumeros(cadena);
    return sumarNumeros(numeros);
}

function determinarVacioONulo(cadena){
    let vacio = cadena === "" || cadena === undefined;
    return vacio;
}

function determinarExpresionRegular(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Caracteres especiales en expresiones regulares
}

function obtenerNumeros(cadena) {
    let delimitador = /[,|-]/; // Esta es una expresión para dividr por coma o guion.

    if (cadena.startsWith("//[")) {
        const delimitadorFin = cadena.indexOf("] ");
        const delimitadores = cadena.substring(2, delimitadorFin + 1);
        const delimitadoresArray = delimitadores.match(/\[([^\]]+)\]/g).map(d => d.slice(1, -1));
        delimitador = new RegExp(delimitadoresArray.map(d => determinarExpresionRegular(d)).join("|") + "|,|-");
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

export { sumarCadena, determinarVacioONulo, obtenerNumeros, sumarNumeros };