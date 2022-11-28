let nombre = 'Julio'
let apellido = 'Quintero '

const nombreCompleto = {
    "nombre": nombre,
    "apellido": apellido
}

sessionStorage.setItem('nombreCompleto', JSON.stringify(nombreCompleto))
localStorage.setItem('nombreCompleto', JSON.stringify(nombreCompleto))

document.cookie = 'nombreCompleto=' + JSON.stringify(nombreCompleto) +
    ";expires=Mon, 28 Nov 2022 20:59:59 GMT;"
