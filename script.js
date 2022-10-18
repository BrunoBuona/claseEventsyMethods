let contenedorTarjetitas = document.getElementById("cardsJs");
let searchJs = document.getElementById("searchBar");

function imprimir(array, container ){
    array.forEach(objetoEvento =>{ // Primer paso, recorrer un array a seleccion.
        container.innerHTML+= // Imprimir ese recorrido, dentro de un contenedor a eleccion.
        `
        <div class="card" style="width: 18rem;">
        <img src="${objetoEvento.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${objetoEvento.name}</h5>
          <p class="card-text">${objetoEvento.description}</p>
        </div>
      </div>
        `
    })
}

imprimir(events, contenedorTarjetitas)

searchJs.addEventListener("keyup", evento =>{
    let inputUser = evento.target.value // Muestra el valor de lo que escribio el usuario hasta el momento en que dejo de apretar teclas de su teclado
    let filtro = events.filter(objetoEvento => objetoEvento.name.toLowerCase().includes(inputUser.toLowerCase()))
    cardsJs.innerHTML = " "
    imprimir(filtro, cardsJs)

})