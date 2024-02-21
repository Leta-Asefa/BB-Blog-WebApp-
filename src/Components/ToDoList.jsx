import { useState } from "react"

export default function ToDoList() {

    const [tasks, setTasks] = useState(["Waking Up", "Eating Breakfast"])


    function addTasks() {
        let task = document.getElementById("taskInput")
        if (task.value !== "") {
            setTasks([...tasks, task.value])
            task.value=''
        }
    }


    function deleteTask(index) {
        setTasks(t=>tasks.filter((_,i)=> i!==index))
    }



    return (

        <div className="container">
            <div className="addTasks" >
                <input id="taskInput" className="text" type="text" />
                <button className="bg-green" onClick={addTasks}> Add</button>
            </div>

            <div className="taskList">

                {
                    tasks.map((task, index) => {

                        return <div key={index} className="eachTask">
                            <h4>{task}</h4>
                            <div className="check">
                                <span> <input type="checkbox" />Done </span>
                                <button onClick={()=> deleteTask(index)}>Remove</button>
                            </div>
                        </div>
                    })
                }







            </div>

        </div>
    )



}