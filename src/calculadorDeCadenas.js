function calcularCadena(cadena) {
    if (cadena === "" || cadena === undefined) {
        return 0;
    }

    let numeros = cadena.split(",");
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

export default calcularCadena;