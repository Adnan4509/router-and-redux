import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },{
      path: "/about",
      element: <About/>
    },{
      path: "/contact",
      element: <Contact/>
    }
  ])

  return (
    <>
      <Navbar/>
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
