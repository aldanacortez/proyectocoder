// console.log("Carrito de compras");
// const opcionSalir = 3;
// const arrayDeProductos = [];

// class Producto {
//   constructor(nombre, precio, categoria) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.categoria = categoria;
//   }
// }

// const paginaEstatica = new Producto("Página estática", 20000, "Desarrollo Web");
// arrayDeProductos.push(paginaEstatica);

// const eCommerce = new Producto("Ecommerce", 50000, "Desarrollo Web");
// arrayDeProductos.push(eCommerce);

// const logo = new Producto("Logo", 10000, "Diseño");
// arrayDeProductos.push(logo);

// const flyer = new Producto("Flyer", 5000, "Diseño");
// arrayDeProductos.push(flyer);

// const empresarial = new Producto("Empresarial", 80000, "Marketing");
// arrayDeProductos.push(empresarial);

// const redes = new Producto("Redes", 60000, "Marketing");
// arrayDeProductos.push(redes);

// const verDesarrolloWeb = () => {
//   const filtrado = arrayDeProductos.filter(
//     (el) => el.categoria === "Desarrollo Web"
//   );
//   let mensaje = "";
//   filtrado.forEach((el) => {
//     mensaje += `\nProducto:` + el.nombre + "" + "\nPrecio" + el.precio;
//   });
//   alert(mensaje);
// };

// const verDesign = () => {
//   const filtrado = arrayDeProductos.filter((el) => el.categoria === "Diseño");
//   let mensaje = "";
//   filtrado.forEach((el) => {
//     mensaje += `\nProducto:` + el.nombre + "" + "\nPrecio" + el.precio;
//   });
//   alert(mensaje);
// };

// const verMarketing = () => {
//   const filtrado = arrayDeProductos.filter(
//     (el) => el.categoria === "Marketing"
//   );
//   let mensaje = "";
//   filtrado.forEach((el) => {
//     mensaje += `\nProducto:` + el.nombre + "" + "\nPrecio" + el.precio;
//   });
//   alert(mensaje);
// };

// const verProductos = () => {
//   let opciones;
//   opciones = parseInt(
//     prompt(
//       "Elija la opción deseada: \n 1. Desarrollo Web \n 2. Diseño \n 3. Marketing \n 4. Volver"
//     )
//   );
//   while (opciones != 4) {
//     switch (opciones) {
//       case 1:
//         verDesarrolloWeb();
//         break;
//       case 2:
//         verDesign();
//         break;
//       case 3:
//         verMarketing();
//         break;
//       case 4:
//         break;
//       default:
//         alert("Opción incorrecta");
//         break;
//     }

//     opciones = parseInt(
//       prompt(
//         "Elija la opción deseada: \n 1. Desarrollo Web \n 2. Diseño \n 3. Marketing \n 4. Volver"
//       )
//     );
//   }
// };

// let opciones = parseInt(
//   prompt(
//     "Elija la opción deseada: \n 1. Todos los productos \n 2. Carrito \n 3. Salir "
//   )
// );

// while (opciones != opcionSalir) {
//   switch (opciones) {
//     case 1:
//       verProductos();
//       break;
//     case 2:
//       verCarrito();
//       break;
//     case 3:
//       break;
//     default:
//       alert("Opción incorrecta");
//       break;
//   }

//   opciones = parseInt(
//     prompt(
//       "Elija la opción deseada: \n 1. Todos los productos \n 2. Carrito \n 3. Salir "
//     )
//   );
// }

// alert("Gracias por su visita");

const serviciosTodos = document.getElementById("serviciosTodos");

const servicios = [
  {
    id: 1,
    img: "https://www.itconsultors.com/images/blog/web-dev.jpg",
    servicio: "Desarrollo Web",
    descripcion:
      "Nuestro equipo experto en desarrollo trabaja en colaboración vos para crear una página web que refleje la esencia de tu negocio",
  },
  {
    id: 2,
    // img:
    servicio: "Marketing",
    descripcion:
      "Te ofrecemos estrategias efectivas y personalizadas para ayudarte a llegar a tus clientes potenciales y aumentar tus conversiones",
  },
  {
    id: 3,
    // img:
    servicio: "Diseño",
    descripcion:
      "Desde las paletas hasta el diseño de la interfaz de usuario, nuestro objetivo es crear una página web atractiva y fácil que mejore tu presencia en línea",
  },
];

let carrito = [];

servicios.forEach((servicio) => {
  let content = document.createElement("div");
  content.innerHTML = `
    <img src=${servicio.img}>
    <h1>${servicio.servicio}</h1>
    <p>${servicio.descripcion}</p>
    `;

  serviciosTodos.append(content);

  let info = document.createElement("button");
  info.innerText = "info";

  content.append(info)

 
});
