//import './App.css'

import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import { Outlet } from "react-router-dom"

function App(setId) {

  return (
    <>
      <div className="bg-cyan-100 min-h-screen">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
