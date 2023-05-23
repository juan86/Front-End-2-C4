/* --------------------------- listado de almbumes --------------------------- */
const albumesFamosos = [{
    id: "x123",
    nombre: "Nevermind",
    imagen: "https://m.media-amazon.com/images/I/71DQrKpImPL._SL1400_.jpg",
    like: true
},
{
    id: "y456",
    nombre: "Thriller",
    imagen: "https://img.discogs.com/LfnH5tbhcZ4xRMNLAodIyvea9xA=/fit-in/600x600/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-294033-1151290881.jpeg.jpg",
    like: true
},
{
    id: "z789",
    nombre: "The wall",
    imagen: "https://img.discogs.com/EbLYco6R1A-5Z7QJ4t4O1JSzsM8=/fit-in/587x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4620059-1370165707-3841.jpeg.jpg",
    like: false
},
{
    id: "a987",
    nombre: "Abbey Road",
    imagen: "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/RDH5EPH2TNENPI73NBWUWWMLPA.jpg",
    like: false
},
{
    id: "b654",
    nombre: "Origin of Symmetry",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_967206-MLA26105577132_102017-O.webp",
    like: false
},
{
    id: "c321",
    nombre: "Back in Black",
    imagen: "https://i1.wp.com/www.scienceofnoise.net/wp-content/uploads/2020/07/068660474366a63e1263e53ff370eb50.jpg",
    like: false
}
];

function capitalizarNombre(nombreCompleto) {
return nombreCompleto
        .split(" ")
        .map(nombre => nombre.charAt(0).toUpperCase() + nombre.slice(1))
        .join(" ");
}

/* -------------------------------------------------------------------------- */
/*                  [1] FUNCION: captar el nombre de usuario                  */
/* -------------------------------------------------------------------------- */
//do while, prompt, innerText
function obtenerUsuario() {
// Pedir el nombre de usuario hasta que sea válido
let usuario = "";
do {
    usuario = prompt("Ingrese su nombre de usuario: ").toLowerCase()
} while ( usuario == null || usuario == "" || usuario.length < 3);

const nombreUsuario = document.querySelector("#nombreUsuario");

nombreUsuario.textContent = capitalizarNombre(usuario);

}
obtenerUsuario();

/* -------------------------------------------------------------------------- */
/*                [2] FUNCION: renderizar tarjetas del almbumes               */
/* -------------------------------------------------------------------------- */
//forEach, template strings, innerHTML
function renderizarAlbumes(listado) {
const covers = document.querySelector(".covers");

covers.innerHTML = "";

listado.forEach(album => {
    covers.innerHTML += `
    <li data-id="${album.id}">
        <img src="${album.imagen}" alt="${album.nombre}"/>
        <h2>${album.nombre}</h2>
        <i id="${album.id}" class="fa fa-heart ${(album.like) ? "favorito" : ""} " > </i>
    </li>`;
});
};

renderizarAlbumes(albumesFamosos);



/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                   [3] FUNCION: mostrar datos del usuario                   */
/* -------------------------------------------------------------------------- */
// Dentro del div '.perfil' tenemos un parrafo con 2 span en los que debemos colocar
// correctamente su contenido.
// Para eso debemos hacer ciertos calculos y colocar esa info en el HTML. Debemos:
// 1- contar la cantidad de albumes del array y pintarlo en el span correspondiente
// 2- contar la cantidad de favoritos y pintarlo en el span correspondiente
// 3- tener en cuenta: usar las palabra en plural o en singular, según cuando
// sea necesario ( es decir: 1 album, 1 favorito / 2 albumes, 3 favoritos )
function mostrarDatosEnPerfil() {
const listadoAlbum = document.querySelector("#cant-albums");
const listadoFavoritos = document.querySelector("#cant-favoritos");

// Modificar El texto del listado de albumes
const tituloAlbumes = listadoAlbum.textContent.split(" ");
tituloAlbumes[0] = albumesFamosos.length;
tituloAlbumes[1] = (tituloAlbumes[0] === 1) ? "álbum" : "álbumes"; 
listadoAlbum.textContent = tituloAlbumes.join(" ");

// Modificar el texto de Favoritos 
const tituloFavoritos = listadoFavoritos.textContent.split(" ");
tituloFavoritos[0] = albumesFamosos.reduce((contador, album) =>{
    if(album.like) return contador + 1;
    return contador;
}, 0);
tituloFavoritos[1] = (tituloFavoritos[0] === 1) ? "favorito" : "favoritos";   
listadoFavoritos.textContent = tituloFavoritos.join(" ");
}
mostrarDatosEnPerfil();