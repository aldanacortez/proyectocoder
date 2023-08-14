// const categoriasTodas = document.getElementById("categoriasTodas");
// const verCarrito = document.getElementById("carrito");
// const modalContainer = document.getElementById("modal-container");

// let carrito = [];

// BOTON PRIMERA VERSION

//   categorias.forEach((categoria) => {
//   let content = document.createElement("div");
//   content.className =
//     "col-10 col-lg-3 card shadow-lg card-style align-items-center mx-4";
//   content.innerHTML = `
//     <img src=${categoria.img} class="card-img-top mt-2">
//     <h2 class="text-center">${categoria.categoria}</h2>
//     <p class="text-center card-text pb-3">${categoria.descripcion}</p>
//     `;

//   categoriasTodas.append(content);

//   let agregarAlCarrito = document.createElement("button");
//   agregarAlCarrito.innerText = "Ver Planes";

//   content.append(agregarAlCarrito);
// });

const servicios = [
  // SERVICIO DE DESARROLLO
  {
    id: "desarrollo 1",
    titulo: "One Page",
    texto: "Plan LoremIpsum",
    img: "../img/servicio-desarrollo01.png",
    categoria: {
      nombre: "Desarrollo",
      id: "desarrollo",
    },
    precio: 20000,
  },
  {
    id: "desarrollo 2",
    titulo: "Static Page",
    texto: "Plan LoremIpsum",
    img: "../img/servicio-desarrollo01.png",
    categoria: {
      nombre: "Desarrollo",
      id: "desarrollo",
    },
    precio: 40000,
  },
  {
    id: "desarrollo 3",
    titulo: "Institucional Page",
    texto: "Plan LoremIpsum",
    img: "../img/servicio-desarrollo01.png",
    categoria: {
      nombre: "Desarrollo",
      id: "desarrollo",
    },
    precio: 60000,
  },
  {
    id: "desarrollo 4",
    titulo: "Ecommerce",
    texto: "Plan LoremIpsum",
    img: "../img/servicio-desarrollo01.png",
    categoria: {
      nombre: "Desarrollo",
      id: "desarrollo",
    },
    precio: 80000,
  },
  {
    id: "desarrollo 5",
    titulo: "ORM",
    texto: "Plan LoremIpsum",
    img: "../img/servicio-desarrollo01.png",
    categoria: {
      nombre: "Desarrollo",
      id: "desarrollo",
    },
    precio: 90000,
  },

  // SERVICIO DE MARKETING
  {
    id: "marketing 1",
    titulo: "Community Manager",
    texto: "Plan LoremIpsum",
    img: "../img/servicio-desarrollo01.png",
    categoria: {
      nombre: "Marketing",
      id: "marketing",
    },
    precio: 30000,
  },
  {
    id: "marketing 2",
    titulo: "Social Media",
    texto: "Plan LoremIpsum",
    img: "../img/servicio-desarrollo01.png",
    categoria: {
      nombre: "Marketing",
      id: "marketing",
    },
    precio: 30000,
  },

  // SERVICIO DE DISEÑO
  {
    id: "design 1",
    titulo: "Logo",
    texto: "Plan LoremIpsum",
    img: "../img/servicio-desarrollo01.png",
    categoria: {
      nombre: "Design",
      id: "design",
    },
    precio: 40000,
  },
  {
    id: "design 2",
    titulo: "Flyer",
    texto: "Plan LoremIpsum",
    img: "../img/servicio-desarrollo01.png",
    categoria: {
      nombre: "Design",
      id: "design",
    },
    precio: 40000,
  },
];

const contenedorServicios = document.querySelector("#contenedor-servicios");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
let botonesAgregar = document.querySelectorAll(".servicio-agregar");
const cantidadCarrito = document.querySelector(".cantidad-carrito");

// CONTENEDOR SERVICIOS
function cargarServicios(serviciosSeleccionados) {
  contenedorServicios.innerHTML = "";
  serviciosSeleccionados.forEach((servicio) => {
    const div = document.createElement("div");
    div.classList.add("servicio");
    div.classList.add("border");
    div.classList.add("mb-5");
    div.innerHTML = `
    <img src="${servicio.img}" class="imagen-servicio mt-3" alt="">
    <div class="servicio">
        <h3 class="servicio">${servicio.titulo}</h3>
        <p class="servicio-plan">${servicio.texto}</p>
        <p class="servicio-precio">${servicio.precio}</p>
        <button class="col-10 servicio-agregar" id="${servicio.id}">Agregar</button>
    </div>
`;

    contenedorServicios.append(div);
  });
  // actualizarBotonesAgregar();
  // console.log(botonesAgregar);
}

// FIN CONTENEDOR SERVICIOS

// CARGA DE SERVICIOS
botonesCategorias.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    botonesCategorias.forEach((boton) => boton.classList.remove("active"));
    e.currentTarget.classList.add("active");

    const serviciosBoton = servicios.filter(
      (servicio) => servicio.categoria.id === e.currentTarget.id
    );
    cargarServicios(serviciosBoton);
    actualizarBotonesAgregar();
    // console.log(botonesAgregar);
  });
});

// FIN CARGA DE SERVICIOS

// AGREGAR SERVICIO A CARRITO
function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".servicio-agregar");

  botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", agregarAlCarrito);
  });
}

const serviciosEnCarrito = JSON.parse(
  localStorage.getItem("servicios-en-carrito")
);

function agregarAlCarrito(e) {
  const idBoton = e.currentTarget.id;
  const servicioAgregado = servicios.find(
    (servicio) => servicio.id === idBoton
  );

  if (serviciosEnCarrito.some((servicio) => servicio.id === idBoton)) {
    const index = serviciosEnCarrito.findIndex(
      (servicio) => servicio.id === idBoton
    );
    serviciosEnCarrito[index].cantidad++;
  } else {
    servicioAgregado.cantidad = 1;
    serviciosEnCarrito.push(servicioAgregado);
  }
  actualizarCantidad();

  localStorage.setItem(
    "servicios-en-carrito",
    JSON.stringify(serviciosEnCarrito)
  );
}

// FIN AGREGAR SERVICIO A CARRITO

function actualizarCantidad() {
  let cantidad = 0;
  serviciosEnCarrito.forEach((element) => {
    cantidad += element.cantidad;
  });
  cantidadCarrito.innerHTML = cantidad;
}

actualizarCantidad()
