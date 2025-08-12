function Controls({ setCounter }){
  return (
    <section>
      <button className='text-3xl font-semibold bg-purple-500 block my-4 text-white active:bg-blue-600 active:text-purple-500 py-2 px-4 rounded-xl' onClick={() => {setCounter(prevCount => prevCount + 1)}}>
        Increment Count
      </button>

      <button className='text-3xl font-semibold bg-purple-500 block my-4 text-white active:bg-blue-600 active:text-purple-500 py-2 px-4 rounded-xl' onClick={() => {setCounter(prevCount => prevCount - 1)}}>
        Decrement Count
      </button>

      <button className='text-3xl font-semibold bg-purple-500 block my-4 text-white active:bg-blue-600 active:text-purple-500 py-2 px-4 rounded-xl' onClick={() => {setCounter(0)}}>
        Reset Count
      </button>
    </section>
  )
}

export default Controls