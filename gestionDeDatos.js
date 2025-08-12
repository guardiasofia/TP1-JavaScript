console.log('-------------PUNTO 1.3-------------');

const productos = [
  { id: 1, nombre: 'Leche entera', precio: 1200, stock: 25 },
  { id: 2, nombre: 'Pan lactal', precio: 950, stock: 40 },
  { id: 3, nombre: 'Arroz 1kg', precio: 1300, stock: 0 },
  { id: 4, nombre: 'Aceite de girasol', precio: 2500, stock: 0 },
  { id: 5, nombre: 'Fideos spaghetti', precio: 1100, stock: 30 }
]

console.log(productos);

console.log('-------------PUNTO 2.1-------------');

console.log(`Longitud total de los productos: ${productos.length}`);

console.log('-------------PUNTO 2.2-------------');
console.log(`Nombre del segundo producto: ${productos[1].nombre}`);

console.log(`Nombre del cuarto producto: ${productos[3].nombre}`);

console.log('-------------PUNTO 3.1-------------');
for(const producto of productos){
  console.log(`${producto.nombre}, ${producto.precio}`);

}

console.log('-------------PUNTO 3.2-------------');
productos.forEach(prod => {
  console.log(`Producto: ${prod.nombre}, Precio: ${prod.precio}`);
})

console.log('-------------PUNTO 4.1-------------');
productos.push(
  {id: 6, nombre: 'Mermelada', precio: 1800, stock: 3},
  {id: 7, nombre: 'Yerba', precio: 1300, stock: 8 }
);
console.log(productos)

console.log('-------------PUNTO 4.2-------------');
productos.pop();
console.log(productos)

console.log('-------------PUNTO 4.3-------------');
productos.unshift({id: 0, nombre: 'Galletas Saladas', precio: 1300, stock: 70});
console.log(productos)

console.log('-------------PUNTO 4.4-------------');
productos.shift()
console.log(productos)

console.log('-------------PUNTO 4.5-------------');
const productosConStock = productos.filter(producto => producto.stock > 0);
console.log(productosConStock)
