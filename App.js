//clase del producto
class Product {
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
}

//metodos para añadir el producto, eliminarlo y mostrar el mensaje
class UI {
  addProduct(product) {
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    element.innerHTML = ` 
             <div class="card text-center mb-4">
             <div class="card-body">
             <strong> Nombre del Producto</strong> ${product.name}
             <strong> Precio del Producto</strong> ${product.price}
             <strong> Año del Producto</strong> ${product.year}
             </div>
             </div>
             `;
    productList.appendChild(element);
 

  }

  resetForm(name, price, year){
    name.value=''
    price.value=''
    year.value='2022'
  }

  deleteProduct() {

  }

  showMessage() {

  }
}

//Doom Eventos (cada que alguien le da clic a un boton)

document
  .getElementById("btn-submit")
  .addEventListener("click", function (e) {

    const name = document.getElementById("name");
    const price = document.getElementById("price");
    const year = document.getElementById("year");

    const product = new Product(name.value, price.value, year.value);

    const ui = new UI();
    ui.addProduct(product)
    ui.resetForm(name,price,year)


    e.preventDefault();
  });
