//import './App.css'

import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <>
      <div className="bg-cyan-100 h-screen w-screen">
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    </>
  )
}

export default App
