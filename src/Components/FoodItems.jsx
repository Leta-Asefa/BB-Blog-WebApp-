import { useState } from "react"

export default function FoodItems() {

    const [foods, setFoods] = useState(["Fruits", "Nut"])

    function updateFoods(newFood) {
        let input = document.getElementById('input')
        setFoods([...foods, input.value])
        input.value = ''
    }

    function deleteFoods(index) {
        setFoods(foods.filter((_,i)=>i!==index))
    }




    return <div>

        <ul>
            {
                foods.map((food, index) => {
                    return  <li key={index} onClick={()=>deleteFoods(index)}>
                                 {food}
                             </li>
                })
            }
        </ul>



        <input id="input" type="text" />

        <button onClick={updateFoods}> + Add </button>



    </div>

}