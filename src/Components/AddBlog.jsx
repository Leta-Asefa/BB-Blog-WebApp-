import {  useRef, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

const AddBlog = () => {

    const [title,setTitle]=useState('')
    const [body,setBody]=useState('')
    const [author, setAuthor] = useState('')
    const [isPending, setIsPending] = useState(false)
    const history=useHistory()

    function handleOnSubmit(e) {
           
            setIsPending(true)
            e.preventDefault()
        if (title == '' || body == '' || author == '')
        {
            setIsPending(false)
            return
        }
            const blog = { title,body,author }
    
            fetch('http://localhost:4000/blogs', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body:JSON.stringify(blog)
            }).then(() => {
                setTitle('')
                setBody('')
                setAuthor('')
                setIsPending(false)
                history.push('/')
            })
            
    }

    function handleTitleChange(e) {
        setTitle( e.target.value)
    }

    function handleBodyChange(e) {
        setBody( e.target.value)
    }

    function handleAuthorChange(e) {
        setAuthor( e.target.value)
    }


    return (

        <div className="text-center text-3xl" >

            <div className="font-bold">Add New Blog</div>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="title" >Title : </label>
                <input id="title" type="text" className="inputs" value={title} onChange={handleTitleChange}/>    <br></br>
                
                <label htmlFor="body" >Body  </label>   <br></br>
                <textarea id="body" cols='150' rows='10' className="bg-gray-300 text-lg" value={body } onChange={handleBodyChange}></textarea> <br></br>

                <label htmlFor="author" >Author : </label>
                <input id="author" type="text" className="inputs" value={author}  onChange={handleAuthorChange}/>    <br></br>
                
                {isPending && <input type="submit" value="Pending" disabled className="button" />}
                {!isPending && <input type="submit" value="Add" className="button" />  }


                
            </form>
        </div>
    )



}

export default AddBlog
