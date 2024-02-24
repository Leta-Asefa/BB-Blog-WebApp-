import { useEffect, useState } from "react"




export default function UseRef() {

    let [num,setNum]=useState(0)

    useEffect(() => {
        console.log("Component Rendered : "+num)
    },[])

    function increment() {
        setNum(n=>n+1)
    }
    
    return (
        <div className="box">
            {num}
           <button onClick={increment}>ADD</button>

        </div>

    )




}