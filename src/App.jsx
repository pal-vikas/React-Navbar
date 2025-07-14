import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import {Routes, Route} from "react-router-dom"
import Error from "./pages/Error"
import Country from "./pages/Country"

function App() {

  return (
    <>
      <Navbar/>
      {/* <h1 className="text-4xl text-center mt-24 font-black">Welcome to react!</h1> */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/country" element={<Country/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
  
    </>
  )
}

export default App
