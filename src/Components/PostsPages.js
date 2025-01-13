import React from 'react'
import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux' 
import { getPostsAction } from '../redux/actions/PostsAction'
import { useNavigate } from 'react-router'
import { Spinner } from 'react-bootstrap'

const PostsPages = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [loading,setLoading] = useState(true)  
 
    useEffect( () => {
        const getData = async ()=>{ 
            setLoading(true)
            await dispatch(getPostsAction()) 
            setLoading(false)
        }
        getData() 
    }, [])

      const posts = useSelector(state => state.PostReducer.getPosts) 

const ToPostDetails = () =>{
    navigate("/post-details")
}
  return (
    <div className='style-posts'>
        <h3>Posts</h3>
            {
                loading === false ?(
                    posts.map((post)=>(
                        <p className='post' onClick={ToPostDetails}>
                            {post.body}
                         </p>
                    ))
                ):<Spinner animation="border" variant="primary" />

            }
    </div>
  )
}

export default PostsPages