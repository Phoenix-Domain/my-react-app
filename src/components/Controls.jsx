function Controls({ setCounter }){
  return (
    <>
      <button className="py-2 px-4 rounded-full bg-blue-900 text-white block my-3" onClick={() => {
        setCounter(prevCount => prevCount + 1)
      }}>Increment</button>

      <button className="py-2 px-4 rounded-full bg-blue-900 text-white block my-3"onClick={() => {
        setCounter(prevCount => prevCount - 1)
      }}>Decrement</button>
    </>
  )
}

export default Controls;