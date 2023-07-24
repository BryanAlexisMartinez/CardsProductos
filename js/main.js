function getData() {
  //fetch regresa una promesa
  let promesa = fetch("https://fakestoreapi.com/products/",
    {
      method: "GET"
    });

  promesa.then((response) => {
    response.json()
      .then((data) => {
        createCards(data);
      })
      .catch((error) => {
        console.error(error, "Problema en el json", error);
      });
  }).catch((error) => {
    console.error(error, "Ocurrio un error en la solicitud");
  });
};//getData
getData();

/*function createCards(data) {
  data.forEach(producto => {
    console.log(producto.id, producto.title);
  });
}//createCards*/

//FUNCIONALIDAD PARA MOSTRAR LOS PRODUCTOS EN CARDS
let mainProds = document.getElementById("mainProds");

//funcion para crear las cards
function createCards(data) {
  data.forEach(prod => {
    mainProds.insertAdjacentHTML("beforeend",
      ` <div class="card" style="width: 18rem;">
    <img src="${prod.image}" class="card-img-top" alt="${prod.description}">
    <div class="card-body">
      <h5 class="card-title">"${prod.title}"</h5>
      <p class="card-text" maxlength="70">"${prod.description.slice(0,80)}..."</p>
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${prod.id}">
        Info
      </button>

      <!-- MODAL -->
      <div class="modal fade" id="exampleModal${prod.id}" tabindex="-1" aria-labelledby="exampleModalLabel" dta-bas-target="exampleModal_${prod.id}" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModal${prod.id}">"${prod.title}"</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            "${prod.description}"
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      <!-- MODAL CIERRE -->
    </div>
  </div>


    `);
  });
}




//getData().then((response) => console.log(response))
 // .catch((err) => console.log(err.message));
