import { useState } from "react"

export default function ColorPicker() {

    const [color,setColor]=useState('')
    let screen=document.getElementById('screen')


  function updateColor(e) {
      setColor(e.target.value) 
        screen.style.backgroundColor=color
  }



    return (
        <center>
            <div id="screen" className="card" >Color Picker</div>
            <input type="color" onChange={updateColor}/>
        </center>
    )
}