import React from 'react'
import { Route, Routes } from 'react-router'
import PostsPages from './Components/PostsPages'
import DetailsPostsPages from './Components/DetailsPostsPages'
import './index.css'
const App = () => {
  return (
    <div>

        <Routes>  
            <Route path="/" element={<PostsPages/>} />
            <Route path="/post-details" element={<DetailsPostsPages/>} />
        </Routes>
    </div>
  )
}

export default App