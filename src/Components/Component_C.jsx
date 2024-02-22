import { useContext } from "react"
import { userNameContext } from "./Component_A"



export default function Component_C(props) {

    const userName=useContext(userNameContext)

    return (
        <div className='box'>
                Component C <br></br>
                User Name : {userName}
        </div>
    )

    
}