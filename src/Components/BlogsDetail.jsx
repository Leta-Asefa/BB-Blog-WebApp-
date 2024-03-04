import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'  
import useFetch from "./useFetch";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function Blog() {

    const { id } = useParams()
    const { data, isPending, error } = useFetch('http://localhost:4000/blogs/' + id)
    const history=useHistory()

    function deleteBlog() {
        fetch('http://localhost:4000/blogs/' + id, {
            method: 'DELETE',
            header: { "Content-Type": "application/text" },
            body:null
        }).then((res) => {
            if (res.ok)
                history.push("/")
            throw Error("Can't delete now !")
        }).catch((err)=> console.log(err.message))
    }



    
    return (
        <div className=" ">
            {isPending && <div className="font-bold text-6xl text-center">Loading . . .</div>}
            {error && <div>Sorry, We couldn't get the data, try later ... </div>}
            {
                data &&
                <div className="mx-40">
                        
                    <Link to={`/update/${id}`}> <button className="button">Update</button></Link>
                     <button className="button" onClick={deleteBlog}> Delete </button>
                        
                     <div className="text-3xl text-center font-bold ">{data.title}</div>
                      <div className="font-bold ">Written By : {data.author}</div>
                      <div className="text-lg">{data.body}</div>
                 </div>
            }
            </div>
    );


}