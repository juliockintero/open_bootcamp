import React, { useEffect, useState } from 'react'

const FourthComponent = () => {

    const initialState = {
        fecha: new Date(),
        edad: 0,
        nombre: "Martin",
        apellidos: "San José"
    }

    const [estado, setEstado] = useState(initialState)


    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    }, []);

    function tick() {
        setEstado({ ...estado, fecha: new Date(), edad: estado.edad = estado.edad + 1 });
    }


    return (
        <div>
            <h2>
                Hora Actual:
                {estado.fecha.toLocaleTimeString()}
            </h2>
            <h3>{estado.nombre} {estado.apellidos}</h3>
            <h1>Edad: {estado.edad}</h1>
        </div>
    )
}

export default FourthComponent