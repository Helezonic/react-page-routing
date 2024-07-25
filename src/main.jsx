import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import { About, ContactUs, Home } from './components/body/index.js'



const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
      {
      path : "",
      element : <Home/>
    },
    {
      path : "/about",
      element : <About/>
    },
    {
      path : "/contactus",
      element : <ContactUs/>
    }
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}/>

)
