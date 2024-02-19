export default function Button({children, operation}) {


    return <button onClick={operation} >
        {children}
    </button>

    
    
    

}