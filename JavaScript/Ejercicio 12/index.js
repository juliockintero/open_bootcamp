const logger = require('./logger')

const errorMessage = () => {
    throw new Error("Esto es un error con mensaje perzonalizado")
}


try {
    //Llamando la funciona que arroja un error:
    errorMessage()
} catch (e) {
    // En caso de fallar, quiero que ejecutes
    logger.error(`El valor de e es: ${e}`)
}