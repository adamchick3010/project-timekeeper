import React from 'react'
import './colorPalette.css'

export default function ColorPalette(props) {
    const colors = ['#FFFFFF', '#BDBDBD', '#606060', '#000000', '#900C3F', '#FF2D00', '#FF5733', '#FFC300', '#FFFF00', '#46FF00', '#278F00', '#1C6600', '#00FFFF', '#0063FF', '#00008D', '#8400FF', '#A900FF', '#FF00FF'];

    return (
        <div className="color-palette">
            {colors.map(color => {
                const activeClass = props.currentColor === color ? 'color-swatch-active' : '';
                return (
                        <div onClick={() => {props.changeColor(color)}} className={`color-swatch ${activeClass}`} style={{backgroundColor: color}}></div>
                )
            })}
        </div>
    )
}