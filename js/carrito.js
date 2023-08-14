const serviciosEnCarrito = JSON.parse(
  localStorage.getItem("servicios-en-carrito")
);
const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoServicios = document.querySelector("#carrito-servicios");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-lleno");

if (serviciosEnCarrito) {
  contenedorCarritoVacio.classList.add("disabled");
  contenedorCarritoServicios.classList.remove("disabled");
  contenedorCarritoAcciones.classList.remove("disabled");
  contenedorCarritoComprado.classList.add("disabled");

  contenedorCarritoServicios.innerHTML = "";

  serviciosEnCarrito.forEach(servicio => {
    const div = document.createElement("div");
    div.classList.add("carrito-servicios");
    div.innerHTML = `
        <img class="carrito-servicio-imagen" src="${servicio.imagen}" alt="${servicio.titulo}">
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
                    <button class="carrito-servicio-eliminar col-1" id="${servicio.id}"><i class="fa-solid fa-trash"></i></button>
        `;

        contenedorCarritoServicios.append(div);
  });

} else {
}
