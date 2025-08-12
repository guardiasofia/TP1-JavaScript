console.log('-------------PUNTO 1.3-------------');

const productos = [
  { id: 1, nombre: 'Leche entera', precio: 1200, stock: 25 },
  { id: 2, nombre: 'Pan lactal', precio: 950, stock: 40 },
  { id: 3, nombre: 'Arroz 1kg', precio: 1300, stock: 18 },
  { id: 4, nombre: 'Aceite de girasol', precio: 2500, stock: 12 },
  { id: 5, nombre: 'Fideos spaghetti', precio: 1100, stock: 30 }
]

console.log(productos);

console.log('-------------PUNTO 2.1-------------');

console.log(`Longitud total de los productos: ${productos.length}`);

console.log('-------------PUNTO 2.2-------------');
console.log(`Nombre del segundo producto: ${productos[1].nombre}`);

console.log(`Nombre del cuarto producto: ${productos[3].nombre}`);