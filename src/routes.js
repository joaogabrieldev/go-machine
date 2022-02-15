import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/login/login'
import Register from './pages/register/register'
import Home from './pages/home/home'
import Post from './pages/post/post'

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  )
}
