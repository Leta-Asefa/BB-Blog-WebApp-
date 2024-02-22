import { useEffect, useState } from "react"


export default function Clock() {
    
    const [hour,setHour]=useState(new Date().getHours())
    const [min,setMin]=useState(new Date().getMinutes())
    const [second,setSeconds]=useState(new Date().getSeconds())


    useEffect(() => {
        const intervalId=setInterval(() => {
            updateTime()
        }, 1000);
        console.log('Interval is added')

        return () => {
            clearInterval(intervalId)
            console.log('Interval is removed')
                 }
    },[])

    function updateTime() {
        const newHour = getNumber(new Date().getHours()>12?new Date().getHours()%12:new Date().getHours())
        const newMin = getNumber(new Date().getMinutes())
        const newSecond = getNumber(new Date().getSeconds())
        
        setHour(newHour)
        setMin(newMin)
        setSeconds(newSecond)

    }

    function getNumber(number) {
        return (number < 10 ? '0' : '') + number
        }


    return (
        <div className="font-50 bg-green">
            <center className="position-sticky">
                Digital Clock
            </center>
            <center>
                {hour>12? hour%12:hour}:{min}:{second}
            </center>
        </div>
    )
 



}