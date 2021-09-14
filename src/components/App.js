import React, { useState } from 'react';
import './App.css';
 import Svg3 from './image3';
 import Svg2 from './image2';
 import Svg1 from './image1';
import Buttons from './Buttons';
import ColorPalette from './Color-Palette';

const App = () => {
  const [fillColors, setFillColors] = useState(Array(36).fill('white'))
  const [currentColor, setCurrentColor] = useState('white')

  const onFillColor = (i) => {
    let newFillColors = fillColors.slice(0)
    newFillColors[i] = currentColor
    setFillColors(newFillColors)
  }

  let i = 1;
  const choosePhoto = () => {
    if(i === 1){
      <Svg1 fillColors={fillColors} onFill={onFillColor} />
      i++;
      console.log(i);
    }
    else if(i === 2){
      <Svg2 fillColors={fillColors} onFill={onFillColor} />
      i++
      console.log(i);

    }
    else {
      <Svg3 fillColors={fillColors} onFill={onFillColor} />
      i = 1;
      console.log(i);

    }
  }
  
  return (
    <div className="app">
      <ColorPalette currentColor={currentColor} changeColor={setCurrentColor}/>
      <button onClick={choosePhoto}>onklik</button>
      <Svg1 fillColors={fillColors} onFill={onFillColor} />
      {/* <Buttons /> */}
    </div>
  )
}
export default App

