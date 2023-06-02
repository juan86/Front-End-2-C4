/* -------------------------------------------------------------------------- */
/*                       [4] FUNCION: renderizar errores                      */
/* -------------------------------------------------------------------------- */
// Desarrollamos esta funcion para llamarla en el submit
function renderizarErrores(listado) {
    

    // 👇si ya existe la caja la eliminamos del DOM para no multiplicar elementos
    const cajaErrores = document.querySelector("#errores");

    // Si el div Existe entonces se borra
    if (cajaErrores) cajaErrores.remove();

    // si el array listado esta vacio salgo de la funcion
    if (listado.length == 0) return;

    // creamos la caja de errores a mostrar 
    const divErrores = document.createElement('div');
    divErrores.id = "errores";
    divErrores.style = `
        background: rgba(255,0,0,0.2);
        padding: 0.5em 1em;
        border-radius: 5px;
        color: red;
        margin : 0.5em 0;
    }`

    listado.forEach(error => {
        divErrores.innerHTML += `
        <p>
            <small>
                ${error}
            </small>
        </p>
        `;
    });
    
    form.appendChild(divErrores);
}

/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                [5] FUNCION: Formulario completado con éxito                */
/* -------------------------------------------------------------------------- */
// Esta funcion se va a encargar de mostrar que el formulario se completó correctamente.
// Para eso debera cumplir con los siguientes requerimientos.
// 1 - Recibe el listado de errores, y solo si no hay ninguno debe:
// 2 - mostrar al final del formulario un caja con la misma estructura que la caja de errores, pero con la tonalidad verde
// 3 - dentro la caja debe mostrar un párrafo con el mensaje: "¡Formulario completado con éxito!"
// 4 - a su vez se debe deshabilitar el boton del formulario
// 5 - finalmente pasados 4 segundos: se debe eliminar esa caja, habilitar el boton y limpiar el formulario

function mostrarMensajeExito(listado) {
    //   desarrollar la funcion aqui
    // 👇si ya existe la caja success del DOM para no multiplicar elementos
    const cajaSuccess = document.querySelector("#success");
    
    // Si el div Existe entonces se borra
    if (cajaSuccess) cajaSuccess.remove();

    // si hay errores entonces no mostrar el div success
    if (listado.length != 0) return;
    
    // Se deshabilita el boton del formulario
    const boton = document.querySelector('button')
    boton.disabled = true;

    const divSuccess = document.createElement('div');
    divSuccess.id = "success";
    divSuccess.style = `
        background: rgba(174,250,151,0.8);
        padding: 0.5em 1em;
        border-radius: 5px;
        color: green;
        margin : 0.5em 0;
    }`
    
    divSuccess.innerHTML = `<p><small>¡Formulario completado con éxito</small><span id='contador'>4</span></p>`;
    form.appendChild(divSuccess);

    let tiempo = 4;
    const contadorElemento = document.querySelector('#contador');
    contadorElemento.style.marginLeft = '50px';

    const contadorInterval = setInterval(() => {
        tiempo--;
        contadorElemento.textContent = tiempo;
    
        if (tiempo === 0) {
          clearInterval(contadorInterval);
          divSuccess.remove();
          boton.disabled = false;
          form.reset();
        }
    }, 1000);

}