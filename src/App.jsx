import React from 'react'
import './App.css'
import Home from './Components/Home/Home'
import Fruits from './Components/Fruits/Fruits'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dairy from './Components/Dairy/Dairy'
import Seafood from './Components/Seafood/Seafood'
import AllProduts from './Components/AllProducts/AllProduts'
import Layout from './Components/Layout/Layout'
import About from './Components/About/About'
import Processpage from './Components/Processpage/Processpage'
import Contact from './Components/Contact/Contact'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,   
      children:[
        {
      path: '/',
      element: <Home /> 
    },
        {
      path: '/fruits',
      element: <Fruits /> 
    },
     {
      path: '/dairy',
      element: <Dairy /> 
     },
     {
      path: '/seaFood',
      element: <Seafood /> 
     },
         {
      path: '/allproducts',
      element: <AllProduts /> 
     },
         {
      path: '/about',
      element: <About /> 
     },
           {
      path: '/process',
      element: <Processpage/> 
     },
            {
      path: '/contact',
      element: <Contact/> 
     }
      ]
    },
    
  ])

  return <RouterProvider router={router} />
}

export default App
