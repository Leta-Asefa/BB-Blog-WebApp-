import { useEffect, useState } from "react"



export default function UseEffect() {

    const [count, setCount] = useState(0)
    const [width, setWidth] = useState(window.innerWidth)
    
    
    useEffect(() => {
        document.title=`count : ${count}`
    }, [count])
    

    useEffect(() => {
        window.addEventListener('resize', add)
        console.log("Event Listner is added")
        return () => {
            window.removeEventListener("resize", add)
            console.log("Event Listner is removed")
        }
    },[width])
    
    
    function add() {
        setCount(count+1)
        setWidth(window.innerWidth)
    }


    return (<>
        <div className="bg-gray">
            <center>
             {count} count
            </center>
            <br></br>
            
            <button onClick={add}>Add</button>

            <p>{width} px</p>
        </div>

    </>
    )


}