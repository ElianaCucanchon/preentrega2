const servicios = [new servicio("Aseo general", "Aseo general de la casa, con limpieza en baños, cocina y habitaciones", 50.00, ),
                   new servicio('Aseo Cocina', 'Limpieza profunda y completa de la cocina con organizacion de utencilios y desinfeccion', 30.00 ),
                   new servicio('Aseo Garaje', 'Limpieza profunda y completa del garaje con organizacion de objetos', 35.00 ),
                   new servicio('Aseo Baños', 'Limpieza profunda y completa de los baños con organizacion y desinfeccion', 35.00 ),
                   new servicio('Organizacion Closet', 'Organizacion prenda por prenda, por color, tamaño y tipo', 30.00 ),

               ];

const cliente = [] /////////Servicios a prestar

function pedidoServicio() {
    let servicioPedidos = `Servicios para la limpieza de su Hogar, por favor escoja del 1 al 5 cual de los siguientes servicios desea solicitar: `;
    servicios.forEach((servicio, index) => {
        servicioPedidos = servicioPedidos +
            `${index + 1} - ${servicio.nombre} : ${servicio.descripcion} \n
        precio: ${servicio.precio} \n `;
    });


    let opcion = prompt(servicioPedidos);
    while (opcion < 1 || opcion > servicios.length) {
        opcion = prompt(servicioPedidos + 'Por favor ingrese una opcion Valida del 1 al 5: ')
    }


    cliente.push(servicios[opcion - 1]);
}

function cerrarPedido() {
    let total = cliente.reduce((total, servicio) => { return total + servicio.precio }, 0);
    alert(`Gracias por escogernos, sus servicios ya estan seleccionados, lo estaremos contactando para mayor detalle. Seria un total de: $${total}`);
}

function serviciosPrincipales() {
    do {
        pedidoServicio();
        opcion = prompt('Desea agregar otro servicio? s/n').toLocaleLowerCase();

    } while (opcion !== 'n');
}

serviciosPrincipales();
cerrarPedido();
