//Ejercicio 11
// 11.1 - Una función sin parámetros que devuelva siempre "true"
const funcSinParametros = () => true;
console.log(funcSinParametros())


//- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 
//5 segundos después de haberse ejecutado

function Saludar() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hola soy una promesa');
        }, 5000)
    });
}

async function llamado() {
    console.log("esperando los 5 segundos");
    const result = await Saludar();
    console.log(result);
}

llamado();


//- Una función generadora de índices pares automáticos.

function* generadora() {
    let id = 0;

    while (true) {
        id += 2;
        if (id > 10) {
            return id
        }
        yield id
    }


}

const gen = generadora()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
