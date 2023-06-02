/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  const nombreCompleto = prompt("Ingese su nombre por favor:");
  const anioNacimiento = prompt("Ingese su año de nacimiento por favor:");
  const nombreCiudad = prompt("Ingese su ciudad por favor:");
  datosPersona.nombre = nombreCompleto.split(" ").map(nombre => nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase()).join(" ");
  datosPersona.ciudad = nombreCiudad.split(" ").map(nombre => nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase()).join(" ");
  datosPersona.interesPorJs = confirm("¿Te interesa Javascript?") ? 'Si' : 'NO';

  const fechaActual = new Date();
  const anioActual = fechaActual.getFullYear();

  datosPersona.edad = anioActual - anioNacimiento;
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  document.querySelector('#nombre').textContent = datosPersona['nombre'];
  document.querySelector('#edad').textContent = datosPersona['edad'];
  document.querySelector('#ciudad').textContent = datosPersona['ciudad'];
  document.querySelector('#javascript').textContent = datosPersona['interesPorJs'];


}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const listaMaterias = document.querySelector('#fila');
  
  if (listaMaterias.children.length > 0) return;

  listado.forEach(materia => {
    const caja = document.createElement('div');
    caja.classList.add('caja');
    
    const img = document.createElement('img');
    img.src = materia.imgUrl;
    img.alt = materia.lenguajes;
    
    const pLenguajes = document.createElement('p');
    pLenguajes.classList.add('lenguajes');
    pLenguajes.textContent = materia.lenguajes;
    
    const pbimestre = document.createElement('p');
    pbimestre.classList.add('bimestre');
    pbimestre.textContent = `Bimestre: ${materia.bimestre}`;
    
    caja.appendChild(img)
    caja.appendChild(pLenguajes)
    caja.appendChild(pbimestre);

    listaMaterias.appendChild(caja);
  });

}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  const body = document.querySelector('body');
  cambiarTema.addEventListener('click', () => body.classList.toggle('dark'));
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

window.addEventListener('keydown', (event) => {
  if (event.key.toLowerCase() === 'f') {
    const sobreMi = document.querySelector('#sobre-mi');
    sobreMi.classList.remove('oculto');
  }
});
