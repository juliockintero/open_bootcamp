let boton = document.getElementById('boton-js')

console.log(boton)

boton.addEventListener("click", () => alert('click en el Boton'))

$(() => {
    $("#boton-jquery").click(() => console.log("Hola, estoy utilizando jQuery"))
})