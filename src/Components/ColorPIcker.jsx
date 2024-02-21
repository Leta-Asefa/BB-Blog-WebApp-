import { useState } from "react"

export default function ColorPicker() {

    const [color,setColor]=useState('gray')


  function updateColor(e) {
      setColor(e.target.value) 
  }



    return (
        <center>
            <div id="screen" className="card" style={{backgroundColor:color}} >Color Picker</div>
            <input type="color"  value={color} onChange={updateColor}/>
        </center>
    )
}