import { useState,createContext } from "react";
import Component_C from "./Component_C";
import Component_B from "./Component_B";

export const userNameContext=createContext()

export default function Component_A() {

    const [userName,setUserName]=useState('JavaReactWith..')

    return (
        <div className='box'>
            Component A
            <userNameContext.Provider value={userName}>
                <Component_C />
            </userNameContext.Provider>
        </div>
    )





    
}