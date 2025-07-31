import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Contact from './pages/contact'
import About from './pages/about'
import Posts from './pages/Posts'


function App() {

  return (
   <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/Posts" element={<Posts />} />


      </Routes>
     <>
      
     </>
   </Router>
  )
}

export default App
