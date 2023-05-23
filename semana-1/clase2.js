/* -------------------------------------------------------------------------- */
/*                                  FUNCION 2                                 */
/* -------------------------------------------------------------------------- */
// 👇 Esta funcion nos devuelve 1, 2 o 3 según la elección del usuario.
// Hasta que el usuario ingrese un dato válido le seguimos pidiendo que elija.

function pedirJugada() {
    do{
        valorIngresado = parseInt(prompt("Ingrese una opcion: \n 1. Piedra. \n 2. Papel. \n 3. Tijera."));
        if (!(isNaN(valorIngresado) || valorIngresado < 1 || valorIngresado > 3)) return valorIngresado - 1;
        alert("La opcion ingresada no es Valida.");
    }while(!esValido);
}

/* -------------------------------------------------------------------------- */
/*                                  FUNCION 3                                 */
/* -------------------------------------------------------------------------- */
function jugadaRandom() { return Math.floor(Math.random() * 3);}

/* -------------------------------------------------------------------------- */
/*                                  FUNCION 4                                 */
/* -------------------------------------------------------------------------- */
// 👇 Esta funcion nos devuelve el resultado de la partida según las elecciones.
// Comparamos la eleccion de cada uno para saber quien pierde y quien gana.

function compararJugadas() {
    const matrizOpcionesJugadas = ['PIEDRA', 'PAPEL', 'TIJERA'];

    const resultado = {
        eleccionJugador1 : matrizOpcionesJugadas[pedirJugada()],
        eleccionComputador : matrizOpcionesJugadas[jugadaRandom()],
        ganador : 0
    }
    
    if (resultado['eleccionJugador1'] === resultado['eleccionComputador']) return resultado;
    
    resultado['ganador'] = ((resultado['eleccionJugador1'] === "PIEDRA" && resultado['eleccionComputador'] === "TIJERA") ||
                            (resultado['eleccionJugador1'] === "PAPEL" && resultado['eleccionComputador'] === "PIEDRA") ||
                            (resultado['eleccionJugador1'] === "TIJERA" && resultado['eleccionComputador'] === "PAPEL")) ? 1 : 2;
    return resultado;                            
}

function mensajeResultadoRonda(){
    const mensaje = ["Esto es un empate, estuviste cerca!!", "¡Genial ganaste!", "Lástima, perdiste. No te desanimes prueba tu suerte nuevamente!!"];
    const resultadoRonda = compararJugadas();
    
    alert(`Resultado de la Ronda: \n Jugador1 : ${ resultadoRonda['eleccionJugador1']} \n Computador: ${resultadoRonda['eleccionComputador']} \n\n ${mensaje[resultadoRonda['ganador']]}`);

    return resultadoRonda.ganador;
}

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Crear una función que reciba como parametro un texto (la frase de resultado de la partida).
// 2- La función debe mostrar por consola el resultado de la partida.
// 3- A su vez debe mostrar al usuario una alerta con el resutado de la partida.
// 4- Finalmente, si el resultado fue una derrota debe mostrarle al usuario un mensaje de aliento para desearle suerte en la próxima oportunidad.