import { useState } from "react"

export default function Car() {

    const [car,setCar]=useState({year:2023,company:"Ford",model:'Mustang'})
    
    function updateYear(event) {
        setCar({...car,year:event.target.value})
    }
    function updateCompany(event) {
        setCar({...car,company:event.target.value})
    }
    function updateModel(event) {
        setCar({...car,model:event.target.value})
    }
   
    return (
        <center>

            Your car is : {car.year} {car.company} {car.model}
            <br></br>
            <input type="number" value={car.year} onChange={updateYear} />  <br></br>
            <input type="text" value={car.company} onChange={updateCompany} />  <br></br>
            <input type="text" value={car.model} onChange={updateModel} />  <br></br>
            
        </center>
    )




}