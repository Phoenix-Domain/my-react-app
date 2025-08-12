function Controls({ setCounter }){
  return (
    <section>
      <button className='text-3xl font-semibold bg-purple-500 block my-4 text-white py-2 px-4 rounded-xl '>
        Increment Count
      </button>
      <button className='text-3xl font-semibold bg-purple-500 block my-4 text-white py-2 px-4 rounded-xl '>
        Decrement Count
      </button>
    </section>
  )
}

export default Controls