let productos = fetch ("../js/stock.js")
    .then( (response) => response.json())
    .then( (productos) => {
        renderizarCarrito(productos);
} );
