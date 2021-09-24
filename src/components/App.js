import React, { useState } from 'react';
import './App.css';
 import Svg3 from './image3';
 import Svg2 from './image2';
 import Svg1 from './image1';
import ColorPalette from './Color-Palette';

const App = (props) => {
  let newDisplay1, newDisplay2, newDisplay3
  const [fillColors1, setFillColors1] = useState(Array(14).fill('white'))
  const [fillColors2, setFillColors2] = useState(Array(7).fill('white'))
  const [fillColors3, setFillColors3] = useState(Array(36).fill('white'))
  // const [fillColors4, setFillColors4] = useState(Array(36).fill('white'))
  const [currentColor, setCurrentColor] = useState('white')
  const [display1, setDisplay1] = useState(true)
  const [display2, setDisplay2] = useState(false)
  const [display3, setDisplay3] = useState(false)

  const onFillColor1 = (i) => {
    let newFillColors = fillColors1.slice(0)
    newFillColors[i] = currentColor
    setFillColors1(newFillColors)
  }
  const onFillColor2 = (i) => {
    let newFillColors = fillColors2.slice(0)
    newFillColors[i] = currentColor
    setFillColors2(newFillColors)
  }
  const onFillColor3 = (i) => {
    let newFillColors = fillColors3.slice(0)
    newFillColors[i] = currentColor
    setFillColors3(newFillColors)
  }




  const handleDisplay1 = (props) => {
    newDisplay1 = true
    setDisplay1(newDisplay1)
    newDisplay2 = false
    setDisplay2(newDisplay2)
    newDisplay3 = false
    setDisplay3(newDisplay3)
 }
  const handleDisplay2 = (props) => {
    newDisplay2 = true
    setDisplay2(newDisplay2)
    newDisplay1 = false
    setDisplay1(newDisplay1)
    newDisplay3 = false
    setDisplay3(newDisplay3)
 }
  const handleDisplay3 = (props) => {
    newDisplay3 = true
    setDisplay3(newDisplay3)
    newDisplay1 = false
    setDisplay1(newDisplay1)
    newDisplay2 = false
    setDisplay2(newDisplay2)
 }



  
  return (
    <div className="app">
      <ColorPalette currentColor={currentColor} changeColor={setCurrentColor}/>
      <div className="controlBtns">
      <button className="switchBtn" onClick={handleDisplay1}>obraz1</button>
      <button className="switchBtn" onClick={handleDisplay2}>obraz2</button>
      <button className="switchBtn" onClick={handleDisplay3}>obraz3</button>
      {/* <button className="switchBtn" onClick={fillColors1}>obraz3</button> */}
      </div>
      <div className="svgContainer" style={display1 ? {display: 'flex'}: {display: 'none'}}>
      <Svg1 fillColors={fillColors1} onFill={onFillColor1} />
      </div>
      <div className="svgContainer" style={display2 ? {display: 'flex'}: {display: 'none'}}>
      <Svg2 fillColors={fillColors2} onFill={onFillColor2} />
      </div>
      <div className="svgContainer" style={display3 ? {display: 'flex'}: {display: 'none'}}>
      <Svg3 fillColors={fillColors3} onFill={onFillColor3} />
      </div>
    </div>
  )
}
export default App

// function download(){
//   var svgInfo = document.querySelector('svg').outerHTML
//   var parser = new DOMParser();
//   var xmlDoc = parser.parseFromString(svgInfo,"text/xml");
//   var dl = document.createElement("a");
//   document.body.appendChild(dl); // This line makes it work in Firefox.
//   dl.setAttribute("href", "data:image/js+xml;base64,"+xmlDoc);
//   dl.setAttribute("download", "test.svg");
//   dl.click();
// }
// download();

