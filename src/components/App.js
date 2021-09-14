import React, { useState } from 'react';
import './App.css'
import Svg from './image'
import ColorPalette from './Color-Palette'

const App = () => {
  const [fillColors, setFillColors] = useState(Array(14).fill('white'))
  const [currentColor, setCurrentColor] = useState('white')

  const onFillColor = (i) => {
    let newFillColors = fillColors.slice(0)
    newFillColors[i] = currentColor
    setFillColors(newFillColors)
  }
  
  return (
    <div className="app">
      <ColorPalette currentColor={currentColor} changeColor={setCurrentColor}/>
      <Svg fillColors={fillColors} onFill={onFillColor} />
    </div>
  )
}
export default App

