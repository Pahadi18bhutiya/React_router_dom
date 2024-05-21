import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import Carriers from './Components/Carriers'
import Company from './Components/Company'
import About from './Components/About'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Features from './Components/Features'

function App() {
  // const [count, setCount] = useState(0)
  const router=createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Home/></>
    },
    {
      path:"/Carriers",
      element:<><Navbar/><Carriers/></>
    },
    {
      path:"/Company",
      element:<><Navbar/><Company/></>
    },
    {
      path:"/About",
      element:<><Navbar/><About/></>
    },
    {
      path:"/Login",
      element:<><Navbar/><Login/></>
    },
    {
      path:"/Signup",
      element:<><Navbar/><Signup/></>
    },
    {
      path:"/Features",
      element:<><Navbar/><Features/></>
    }
  ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
