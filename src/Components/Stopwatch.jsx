import { useEffect, useRef, useState } from "react"

export default function UseRef() {

    const [isRunning,setIsRunning]=useState(false)
    const [ending,setEnding]=useState(null)
    const starting=useRef(0)
    const intervalId=useRef(null)

    useEffect(() => {



        if (isRunning) {
            intervalId.current=setInterval(() => {
             setEnding(Date.now()-starting.current)
            }, 10);
        }

        
        return ()=>clearInterval(intervalId.current)

    },[isRunning])


    function start() {
       starting.current=Date.now()-ending
       setIsRunning(true)
    }

    function stop() {
        setIsRunning(false)
    }


    function reset() {
        setIsRunning(false)
        setEnding(0)
    }


    function formatTime() {

        let minute=Math.floor(ending/60000)
        let second=Math.floor(ending/1000%60)
        let milisecond = Math.floor(ending % 1000 / 10)
        
        minute = String(minute).padStart(2, '0')
        second=String(second).padStart(2,'0')
        milisecond=String(milisecond).padStart(2,'0')


        return `${minute}: ${second}:${milisecond}`
    }

   


    return (
        <div className="flex"> 
        <center className="stopwatchcontainer">

            <div className="screen">
                {formatTime()}
            </div>

            <div className="buttonContainer">
                <button className="stop" onClick={stop}>Stop </button>
                <button className="start" onClick={start}>Start </button>
                <button className="reset" onClick={reset}>Reset </button>
            </div>

            </center>
        </div>
    )



}
