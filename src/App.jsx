import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Posts from './pages/Posts';


function App() {

  return (
   <Router>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/Contact'>Contact</Link>
      <Link to='/About'>About</Link>
      <Link to='/Posts'>Posts</Link>
    </nav>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/About" element={<About />} />
      <Route path="/Posts" element={<Posts />} />
    </Routes>
    <>
    
    </>
   </Router>
  )
}

export default App
