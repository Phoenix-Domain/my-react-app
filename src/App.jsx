import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Posts from './pages/Posts';
import Users from './pages/Users'

function App() {

  return (
   <Router>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Users/:username' element={<Users /> } />
    </Routes>
    <>
    
    </>
   </Router>
  )
}

export default App
