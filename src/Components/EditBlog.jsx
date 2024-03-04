import {  useEffect, useRef, useState } from "react"
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min"
import useFetch from "./useFetch"

const EditBlog = () => {

    const [isPending, setIsPending] = useState(false)
    const { id } = useParams()
    const {data: blog,isPending:isFetchPending,error}=useFetch('http://localhost:4000/blogs/'+id)    
    const [title,setTitle]=useState('')
    const [body,setBody]=useState("")
    const [author, setAuthor] = useState("")
    const history=useHistory()

    useEffect(() => {
        if (!isFetchPending) {
            setTitle(blog.title)
            setBody(blog.body)
            setAuthor(blog.author)
        }

    },[isFetchPending])

    function handleOnSubmit(e) {
           
            setIsPending(true)
        e.preventDefault()
        if (title == '' || body == '' || author == '')
        {
            setIsPending(false)
            return
        }
        const blog = { "id":id,title,body,author }
    
            fetch('http://localhost:4000/blogs/'+id, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body:JSON.stringify(blog)
            }).then(() => {
                setTitle('')
                setBody('')
                setAuthor('')
                setIsPending(false)
                history.push('/get/'+id)
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

            <div className="font-bold">Update The Blog</div>
            {isFetchPending && <div className="text-4xl text-center">Finding The Blog</div>}
            {blog &&  <form onSubmit={handleOnSubmit}>
                        <label htmlFor="title" >Title : </label> 
                        <input id="title" type="text" className="inputs" value={title} onChange={handleTitleChange}/>    <br></br>
                        
                        <label htmlFor="body" >Body  </label>  <br></br>
                       <textarea cols='150' rows='10' id="body" className="bg-gray-300  text-lg" value={body } onChange={handleBodyChange}></textarea> <br></br>

                        <label htmlFor="author" >Author : </label>
                        <input id="author" type="text" className="inputs" value={author}  onChange={handleAuthorChange}/>    <br></br>
                        
                        {isPending && <input type="submit" value="Pending" disabled className="button" />}
                        {!isPending && <input type="submit" value="Update" className="button" />  }
        
                     </form>
            }
            
        </div>
    )



}

export default EditBlog
