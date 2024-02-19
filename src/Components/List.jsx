import Button from './Button'

export default function (props) {
  
    let fruits=props.items
    
    function onClick(event) {
        event.target.style.display='none'
    }
    return (
        <>
            <Button text="Display Fruits" onClick={onClick } />
        <div className="List">
            <ul>
                {fruits.map((fruit) => {
                    return <li>{fruit}</li>
                })}
            </ul>
        </div>
        </>

    );


}









