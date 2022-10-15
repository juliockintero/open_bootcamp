// Ejercicios de listas.

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listaCompra = ['Arroz', 'Pechuga de pollo', 'Espinaca', 'Merluza', 'Huevos', 'Lentejas']

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push('Aceite de Girasol')
console.log(listaCompra)

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.pop()
console.log(listaCompra)

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
let listaPeliculas = [
    { "titulo": "El justiciero", "director": "Antoine Fuqua", "fecha": "2014-10-16-"},
    { "titulo": "¿Y dónde están las rubias?", "director": "Keenen Ivory Wayans", "fecha": "2004-06-23-"},
    { "titulo": "Focus", "director": "Glenn Ficarra", "fecha": "2015-03-05"}
];

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
let listaPeliculasFiltradas = listaPeliculas.filter(n => n.fecha > "2010-01-01")

console.log(listaPeliculasFiltradas)

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const listaDirectores = listaPeliculas.map(n => n.director);
console.log(listaDirectores)

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

const listaTitulos = listaPeliculas.map(n => n.titulo)
console.log(listaTitulos)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const listaDirectoresYTitulos = listaDirectores.concat(listaTitulos)
console.log(listaDirectoresYTitulos)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const listaDirectoresYTitulosPropagacion = [...listaDirectores,...listaTitulos];
console.log(listaDirectoresYTitulosPropagacion)