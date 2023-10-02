

// Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
document.querySelector("h2#gen-1").innerHTML = "Generasión 1 Pokimon";

// Cambia el color de fondo de la primera generación de Pokimon.
document.querySelector("body > main > div:nth-child(6)").style.backgroundColor = "pink";


// Imprime por consola la URL de la página.
console.log(document.querySelector("body").baseURI)


// Imprime por consola el dominio de la página. - calavera?
console.log(document.querySelector("body").ownerDocument.domain)


// Imprime todos los nodos de imagen.
let imagenes = document.querySelectorAll(".img-fixed")
for (let i = 0; i < imagenes.length; i++) {
    console.log(imagenes[i].src);
}


// Sustituye el atributo "src" de todas las imágenes por este
for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
}


// Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying

let flyingTypes = document.querySelectorAll("span.infocard-lg-data.text-muted > small > a.itype.flying")

for (let i = 0; i < flyingTypes.length; i++) {
    
    flyingTypes[i].parentElement.parentElement.style.backgroundColor = "yellow"
}

