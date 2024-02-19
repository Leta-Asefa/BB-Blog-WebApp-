import Header from './Components/Header'
import Button from './Components/Button'
import Screen from './Components/Screen'
import { useState } from 'react';

function App() {
  const [name,setName]=useState('')
  const [age,setAge]=useState('')
  const [payment,setPayment]=useState('')
  const [shipping,setShipping]=useState('')



  function updateName(e) {
    setName(e.target.value)
  }

  function updateAge(e) {
    setAge(e.target.value)
  }


  function updatePayment(e) {
    setPayment(e.target.value)
  }

  function updateShipping(e) {
    setShipping(e.target.value)
  }
 
 
  return (
    <div >
          <input type='text' placeholder='Enter Your Name'  onChange={updateName}/>
          <p>Name : {name}</p>


          <input type='number' placeholder='age' min={0} onChange={updateAge}/>
          <p>Age : {age}</p>

      

      <select onChange={updatePayment}>
        <option value="Visa">Visa</option>  
        <option value="Credit Card">Credit Card</option> 
        <option value="Master Card">Master Card</option> 
        <option value="CBE Bank">CBE Bank</option> 
      </select>
      <p>Payment Method : {payment}</p>


      <label>

        <input type='radio' value='pickup' name='method' onChange={updateShipping} checked={shipping === 'pickup'} />
        Pick up
      </label>

      <br></br>
      <label>

        <input type='radio' value='delivery' name='method' onChange={updateShipping} checked={shipping=== 'delivery'} />
        Delivery
      </label>

      <p>shipping : {shipping}</p>
    </div>

  );


}

export default App;
