import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Contact from './pages/contact'
import About from './pages/about'


function App() {

  return (
   <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>


      </Routes>
     <>
      
     </>
   </Router>
  )
}

export default App
