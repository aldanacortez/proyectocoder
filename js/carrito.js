const cantidadCarritox = document.querySelector(".cantidad-carrito");
const totalCarrito = document.querySelector("#total");
let serviciosEnCarritoX = JSON.parse(
  localStorage.getItem("servicios-en-carrito")
);

const contenedorCarritoVacio = document.querySelector(".carrito-vacio");
const contenedorCarritoServicios = document.querySelector(".carrito-servicios");
const contenedorCarritoAcciones = document.querySelector(".carrito-acciones");
const contenedorCarritoComprado = document.querySelector(".carrito-lleno");
let botonesEliminar = document.querySelectorAll(".carrito-servicio-eliminar");
const botonComprar = document.querySelector(".carrito-acciones-comprar");

function actualizarCantidad() {
  let cantidad = 0;
  let total= 0;
  serviciosEnCarritoX.forEach((element) => {
    cantidad += element.cantidad;
    total += element.precio;
  });
  cantidadCarrito.innerHTML = cantidad;
  totalCarrito.innerHTML = "$ "+ total;
}

function cargarServiciosCarrito() {

  if (serviciosEnCarrito) {
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoServicios.classList.remove("disabled");
    contenedorCarritoAcciones.classList.remove("disabled");
    contenedorCarritoComprado.classList.add("disabled");

    serviciosEnCarritoX.forEach((servicio) => {
      const div = document.createElement("div");
      div.classList.add("carrito-servicio");
      div.innerHTML = `
    <img class="carrito-servicio-imagen" src="${servicio.img}" alt="${
        servicio.titulo
      }">
    <div class="carrito-servicio-titulo">
        <small>Título</small>
        <h3>${servicio.titulo}</h3>
    </div>
    <div class="carrito-servicio-cantidad">
        <small>Cantidad</small>
        <p>${servicio.cantidad}</p>
    </div>
    <div class="carrito-servicio-precio">
        <small>Precio</small>
        <p>$${servicio.precio}</p>
    </div>
    <div class="carrito-servicio-subtotal">
        <small>Subtotal</small>
        <p>$${servicio.precio * servicio.cantidad}</p>
    </div>
    <button class="carrito-servicio-eliminar col-1" id="${
      servicio.id
    }" onclick="eliminarDelCarrito(this)"><i class="fa-solid fa-trash"></i></button>
    `;

      contenedorCarritoServicios.append(div);
    });
  } else {
    contenedorCarritoVacio.classList.remove("disabled");
    contenedorCarritoServicios.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.add("disabled");
  }

  actualizarCantidad();
}

cargarServiciosCarrito();

// ----

function eliminarDelCarrito(elem) {
  serviciosEnCarritoX = serviciosEnCarritoX.filter((object) => {
    return object.id !== elem.id;
  });

  localStorage.setItem(
    "servicios-en-carrito",
    JSON.stringify(serviciosEnCarritoX)
  );
    location.reload()
}

botonComprar.addEventListener("click", comprarCarrito);
function comprarCarrito() {
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: '¡Muchas gracias por tu compra!',
    showConfirmButton: false,
    timer: 1500
  })

}

// const serviciosEnCarrito = [];