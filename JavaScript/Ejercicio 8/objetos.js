
const datosPersonales = {
    nombre: 'Julio Cesar',
    apellido: 'Quintero Leal',
    edad: 20,
    altura: 174,
    eresDesarrollador: true
}

let edad = datosPersonales.edad

console.log(edad)

const listdatosPersonales = [
    datosPersonales,

    {
        nombre: 'Sebastian',
        telefono: 32149084234,
        edad: 23,
        email: 'sebas@gmail.com',
        ciudad: 'Casanare',
        direccion: 'Cr 31-734'
    },
    {
        nombre: 'Eduardo',
        telefono: 3214908768,
        edad: 30,
        email: 'edtorres@gmail.com',
        ciudad: 'Casanare',
        direccion: 'Cr 31-734'
    }

]

const ordenedList = listdatosPersonales.sort((a, b) => b.edad - a.edad);

console.log(ordenedList)
