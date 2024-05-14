function calcularCadena(cadena) {
    if (cadena === "" || cadena === undefined) {
        return 0;
    }
    
    let numeros = cadena.split(",");
    let sumaDeLaCadena = 0;

    for (let i = 0; i < numeros.length; i++) {
        sumaDeLaCadena += Number(numeros[i]);
    }

    return sumaDeLaCadena;
}

export default calcularCadena;