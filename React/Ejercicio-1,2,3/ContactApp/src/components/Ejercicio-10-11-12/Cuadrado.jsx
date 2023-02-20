import React from 'react'
import { useState } from 'react'

export const Cuadrado = () => {
    const stylesCuadrado = {
        'height': '255px',
        'width': '255px',
        'backgroundColor': 'rgb(0, 0, 0)',
        'color': 'white'
    }

    const randomRGB = () => {
        return Math.floor(Math.random() * 256);
    }

    const r = randomRGB();
    const g = randomRGB();
    const b = randomRGB();

    const [color, setColor] = useState(stylesCuadrado)
    const [animation, setAnimation] = useState(true)


    const handleMouseOver = () => {
        animation ?
            setColor({ ...stylesCuadrado, backgroundColor: `rgb(${r},${g},${b})` })
            : setColor(stylesCuadrado)
    }

    const handleMouseLeave = () => {

        setColor(stylesCuadrado)
    }

    const handleDoubleClick = () => {
        setAnimation(!animation)
    }



    return (
        <div style={color} onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave} onDoubleClick={handleDoubleClick}>Cuadrado</div>
    )
}
