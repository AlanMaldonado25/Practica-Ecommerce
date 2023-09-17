
let productosEnCarrito =localStorage.getItem("productosEnCarrito");
productosEnCarrito = JSON.parse(productosEnCarrito);
const contenedorCarritoVacio = document.querySelector('#carrito-vacio')
const contenedorCarritoProductos = document.querySelector('#carrito-productos');
const contenedorCarritoAcciones = document.querySelector('#carrito-acciones');
const contnedorCarritoComprado = document.querySelector('#carrito-comprado');

console.log(productosEnCarrito)
if(productosEnCarrito){
    contenedorCarritoVacio.classList.add('disbled');
    contenedorCarritoProductos.classList.remove('disbled');
    contenedorCarritoAcciones.classList.remove('disabled');
    contnedorCarritoComprado.classList.add('disabled')
}else{

}