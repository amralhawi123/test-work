import React from 'react'
import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux' 
import { getPostsAction } from '../redux/actions/PostsAction'
import { useNavigate } from 'react-router'
import { Spinner } from 'react-bootstrap'

const DetailsPostsPages = () => {

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
      navigate("/")
  }

  return (
    <div className='style-details-posts'>
      <button onClick={ToPostDetails}>/Posts</button>
    <h3>Posts Details</h3>

        {
            loading === false ?(
                posts.map((post)=>(
                  <div>
                    <span>ID:-  {post.id}</span>
                    <p>Title:-  {post.title}</p>
                    <p className='post'>
                        Body:-  {post.body}
                     </p>
                  </div>
                ))
            ):<Spinner animation="border" variant="primary"/>

        }
</div>
  )
}

export default DetailsPostsPages