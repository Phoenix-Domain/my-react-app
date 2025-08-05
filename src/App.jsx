import Hello from './components/Hello';
import Header from './components/Header';
import Footer from './components/Footer';
import Welcome from './components/Welcome';

function App() {

  return (
   <>
    <Hello />
    <Header />
    <Footer />
    <Welcome name="Phoenix" message='Rejoice'/>
   </>
  )
}

export default App
