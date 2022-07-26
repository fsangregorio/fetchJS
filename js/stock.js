let productos = fetch ("../js/stock.json")
    .then( (response) => response.json())
    .then( (productos) => {
        renderizarCarrito(productos);
} );
