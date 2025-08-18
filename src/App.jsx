import Form from "./components/Form"
import Result from "./components/Result"
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleSubmit(e){
    e.preventDefault();
    setIsSubmitted(true);

    setName('');
    setEmail('');
    setMessage('');
  }

  return (
   <>
    <Form setName={setName} setEmail={setEmail} setMessage={setMessage} handleSubmit={handleSubmit}/>

    <Result name={name} email={email} message={message} isSubmitted={isSubmitted} />
   </>
  )
}

export default App
