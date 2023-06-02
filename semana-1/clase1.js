/* -------------------------------------------------------------------------- */
/*                                  FUNCION 1                                 */
/* -------------------------------------------------------------------------- */
function iniciarJuego() {
    alert("Bienvenido al popular juego de piedra papel o tijera de Frontend 2.");
    const nombre = obtenerNombreValido();
    alert(`Gracias por jugar ${nombre}. ¡Mucha suerte!`);
    
    return nombre
}

function obtenerNombreValido() {
    let nombre = "";

    while(true){
        nombre = prompt("Ingrese su nombre por favor: ");
        if(esValido(nombre)) break;
        alert("Debe ingresar un nombre valido (Al menos 3 caracteres y sin numeros)");
    }

    return nombre.toUpperCase();
}

function esValido(valorIngresado) {
    // if (valorIngresado.length < 3 || valorIngresado.isEmpty == "" || valorIngresado.isNull) return false;
    // for (let i = 0; i < valorIngresado.length; i++) {
    //     if (!isNaN(valorIngresado[i])) return false;
    // }
    // return true;
    // Version Simplificada
    return (valorIngresado === null || valorIngresado.length < 3 || /\d/.test(valorIngresado)) ? false : true;
}
/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Modificar la funcion de iniciarJuego(), validar si ingresa un dato válido como nombre.
// 2- Si no ingresa un texto, o tiene menos de 3 caracteres debemos volverle a pedir que lo ingrese.
// 3- Finalmente el nombre devuelto debe estar todo en mayúsculas.