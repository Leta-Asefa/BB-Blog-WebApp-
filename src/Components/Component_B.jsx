
import { useContext } from "react";
import Component_C from "./Component_C";
import { userNameContext } from "./Component_A";

export default function Component_B() {
    
    const userName=useContext(userNameContext)

    return (
        <div className='box'>
            in Component B : {userName}

            <Component_C  />
        </div>
    )



    
}