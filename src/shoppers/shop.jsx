import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaEye } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaHeartBroken } from "react-icons/fa";
function Shop() {
    const [post, setPost] = useState([]);
    const [loader, setloading] = useState(false);
    async function fetchpost() {
        setloading(true);
        try {
            const postsy = await fetch('https://dummyjson.com/posts?limit=100');
            const postdata = await postsy.json();
            if (postdata && postdata.posts) {
                setPost(postdata.posts);
            }
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        setloading(false);
        fetchpost();
    }, [])


    return (
        <div>

            {
                loader == true ?
                    post.map((x) => {
                        return (
                            <div class="card text-center p-[20px] shadow-lg shadow-[#000]" >
                                <div class="card-header">
                                    {x.title}
                                </div>
                                <div class="card-body">
                                    <blockquote class="blockquote mb-0 ">
                                        <p>{x.body}</p>
                                        <footer class=" flex items-center justify-evenly">
                                            <div className='flex items-center justify-center flex-col'>
                                                {x.reactions.likes}
                                                <FaHeart className='text-[#EE1D2D]' />
                                            </div>
                                            <div className='flex items-center justify-center flex-col'>
                                                {x.reactions.dislikes}
                                                <FaHeartBroken className='text-[#A64659]' />
                                            </div>
                                            <div className='flex items-center justify-center flex-col'>
                                                {x.views}
                                                <FaEye className='text-[#1118DD]' />
                                            </div>
                                        </footer>
                                    </blockquote>
                                </div>
                            </div>

                        )
                    })
                    :
                    <button className="btn btn-primary mt-[20px] ml-[300px]" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading...
                    </button>
            }
        </div>
    )
}

export default Shop