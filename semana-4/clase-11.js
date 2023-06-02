/* -------------------------------------------------------------------------- */
/*               [1] FUNCION: capturar los datos del formulario               */
/* -------------------------------------------------------------------------- */
function capturarDatosFormulario() {
    // 👇 establecemos un objeto vacío para despues rellenarlo
    const objetoInformacion = {
        nombre: "",
        password: "",
        telefono: "",
        hobbies: [],
        nacionalidad: ""
    }

    // capturamos todos los nodos
    const form = document.querySelector("form");
    const errores = [];
    // 👇 rellenamos el objeto con la info correspondiente
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        objetoInformacion.nombre = form.elements.nom.value;
        objetoInformacion.password = form.elements.pass.value;
        objetoInformacion.telefono = form.elements.tel.value;
        
        objetoInformacion.hobbies = Array.from(form.elements.hobbies)
                                         .filter(elemento => elemento.checked)
                                         .map(seleccionado => seleccionado.id);
        
        const nacionalidades = document.querySelectorAll('input[name="nacionalidad"]:checked');
        
        if (nacionalidades.length > 0) objetoInformacion.nacionalidad = nacionalidades[0].id;
    });      

    return objetoInformacion;
};

/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                         [3] FUNCION: validar datos                         */
/* -------------------------------------------------------------------------- */
// Desarrollar la funcion 3 de validar los datos.
// Esta funcion va a recibir un objeto con la misma estructura de obejetoInformacion
// Entonces dentro de esta función vamos a chequear ciertas validaciones.
// 1- La funcion devuelve un listado de errores según las comprobaciones que hace sobre el objeto.
// 2- Si el nombre no es un texto y tiene menos de 3 caracteres sumar el error: "El nombre debe tener al menos 3 caracteres."
// 3- Si la contraseña tiene menos de 6 caracteres, sin contar espacios al principio, en el medio o final, sumar el error: "La contraseña debe tener al menos 6 caracteres, entre letras y símbolos."
// 4- Si el telefono tiene menos de 10 números, sumar el error: "No es un teléfono válido."
// 5- Si la lista de hobbies tiene más de 4 items, sumar el error: "Sólo es posible seleccionar 4 hobbies."
// 5- Si no hay una nacionalidad definida, sumar el error: "Debe seleccionar una nacionalidad."
function validarInformacion(usuario) {
    let errores = [];
    // 👇 desarrollar aqui la funcion

    // Validacion del nombre
    if(!isNaN(usuario.nombre) || usuario.nombre.length < 3) errores.push('El nombre debe ser un texto de al menos 3 caracteres.'); 

    // Validacion de la contraseña
    const pass = usuario.password.split(" ")
                                 .filter(contenido => contenido.length > 0)
                                 .join();
    if(pass.length < 6) errores.push('La contraseña debe tener al menos 6 caracteres, entre letras y símbolos.');

    // Validacion del telefono
    if(usuario.telefono.length < 10) errores.push('No es un teléfono válido.');

    // Validacion de los hobbies
    console.log(usuario.hobbies.length);
    if(usuario.hobbies.length > 4) errores.push('Sólo es posible seleccionar hasta 4 hobbies.')
    
    // Validacion de la nacionalidad
    if(usuario.nacionalidad.length < 1) errores.push('Debe seleccionar una nacionalidad.');
    
    return errores;
}