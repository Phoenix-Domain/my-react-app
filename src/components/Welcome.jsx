function Welcome({ name, message }){
  return(
    <>
      <h1 className="text-4xl my-4">
        {name}
      </h1>

      <h2 className="text-2xl my-4">
        {message}
      </h2>
    </>
  )
}

export default Welcome;