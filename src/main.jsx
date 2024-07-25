import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { About, ContactUs, Home, Github} from './components/body/index.js'
import User from './components/params/User.jsx'
import { githubLoader } from './components/body/github/Github.jsx'

//const [id,setId]=useState("Helezonic")
const id = "Helezonic"


const router = createBrowserRouter (
  createRoutesFromElements(
  <Route path ='/' element={<App />}>
    <Route path ='' element={<Home/>}/>
    <Route path ='about' element={<About/>}/>
    <Route path ='contact' element={<ContactUs/>}/>
    <Route path ='user/:userid' element={<User/>}/>
    <Route loader = {githubLoader} path ='github' element={<Github/>}/>
  </Route>
  )
 )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
    

)
