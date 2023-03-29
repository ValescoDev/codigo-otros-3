// El código muestra una lista de productos con sus respectivas imágenes. Permite filtrar los productos por tipo o color mediante un campo de entrada y un botón de filtro.

// Codigo refactorizado:
// Se han hecho cambios para corregir errores y mejorar la legibilidad y eficiencia del código.

const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
];

// No hay cambios en el array productos en sí, solo se añadieron espacios después de los dos puntos para mejorar la legibilidad.

const li = document.getElementById("lista-de-productos");
const $i = document.querySelector("#filtro-input");
const botonDeFiltro = document.querySelector("button");

// Se cambió getElementsByName a getElementById para seleccionar el elemento li por su ID en lugar de su nombre.
// Se cambió la variable $input a $i para hacerla más concisa.

function crearProducto(producto) {
  const d = document.createElement("div");
  d.classList.add("producto");

  const ti = document.createElement("p");
  ti.classList.add("titulo");
  ti.textContent = producto.nombre;

  const imagen = document.createElement("img");
  imagen.src = producto.img;

  d.appendChild(ti);
  d.appendChild(imagen);

  return d;
}

function renderizarProductos(productos) {
  const fragmento = document.createDocumentFragment();
  productos.forEach((producto) => {
    fragmento.appendChild(crearProducto(producto));
  });
  li.appendChild(fragmento);
}

// Se creó la función crearProducto para generar el HTML necesario para cada producto.
//Se creó la función renderizarProductos para tomar un array de productos y agregar cada uno al documento en forma de HTML.


function filtrado(productos, texto) {
  return productos.filter(
    (producto) => producto.tipo.includes(texto) || producto.color.includes(texto)
  );
}

function filtrarProductos() {
  const texto = $i.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto);
  li.innerHTML = "";
  renderizarProductos(productosFiltrados);
}

// Se creó la función filtrado para tomar un array de productos y un texto de búsqueda, y filtrar los productos que coinciden con ese texto.
// Se creó la función filtrarProductos para ejecutar la función filtrado, actualizar el HTML de la lista de productos con los productos filtrados y mostrarlos.

renderizarProductos(productos);
botonDeFiltro.addEventListener("click", filtrarProductos);

// En lugar de usar un ciclo for para agregar todos los productos al HTML al principio, se utiliza la función renderizarProductos.
// Se agregó un Event Listener al botón de filtrado para que llame a la función filtrarProductos cuando se haga clic en él.