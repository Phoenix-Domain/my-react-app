function Form({ setName, setEmail, setMessage, handleSubmit }){
  

  return(
    <form action="" onSubmit={(e) => handleSubmit(e)}>
      <article>
        <label> Name:
          <input type="text" className='border-1 block mb-4 p-0.5 bg-gray-300' onChange={e => {
            setName(e.target.value)
          }}/>
        </label>
        <label>Email
          <input type="text" className='border-1 block mb-4 p-0.5 bg-gray-300' onChange={e => {
            setEmail(e.target.value)
          }}/>
        </label>
        <label>Message
          <input type="text" className='border-1 block mb-4 p-0.5 bg-gray-300' onChange={e => {
            setMessage(e.target.value)
          }}/>
        </label>
      </article>

      <button className="text-white font-bold bg-blue-700 py-2 px-4 rounded-full active:bg-red-700 mb-4" type='submit'>
        Submit
      </button>
    </form>
  )
}

export default Form