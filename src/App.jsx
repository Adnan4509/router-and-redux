import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import User from './components/User'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/></>    //this is structuring if we ignore this the destructure error occurs
    },{
      path: "/about",
      element: <><Navbar/><About/></>
    },{
      path: "/contact",
      element: <><Navbar/><Contact/></>
    },{
      path: "/user/:username",
      element: <><Navbar/><User/></>
    }
  ])

  return (
    <>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
