import { useState } from "react"
import Button from './Button'

export default function Screen() {

    
    const [value, setValue] = useState(0)

    function increment() {
        setValue(value + 1)
    }

    function decrement() {
        setValue(value-1)
    }

    function reset() {
        setValue(0)
    }
    
    return (

        <center >
            <div className="card">
                {value}
            </div>

            <div className='bg-gray m-5'>
                <Button text='abebe' operation={increment}>Increment</Button>
                <Button operation={reset}>Reset</Button>
                <Button operation={decrement}>Decrement</Button>
            </div>

        </center>
    )


}