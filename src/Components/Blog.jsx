import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { Link } from 'react-router-dom'  
export default function Blog() {

    const {data: blogs,isPending,error}=useFetch("http://localhost:4000/blogs")


    return (
        <div className="setgrid ">
            {error && <div> Couldn't Fetch Right Now, Try it later . . .<br></br>{error}</div>}

            {isPending && <div  className="font-bold text-6xl text-center"> Loading . . . </div>}

            {blogs && blogs.map(blog => {

                return <div key={blog.id} className="grid-element">
                    <div>Title : <span className="font-bold ">{blog.title}</span> </div>
                    <br></br>
                    <div className="">Wriiten By : {blog.author} </div>
                    <br></br>
                    <Link to={`/get/${blog.id}`}><button className="button" >Read More . . .</button> </Link> 
                </div>
            }
            )
            }

        </div>

    );


}