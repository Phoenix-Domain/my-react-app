function Result({ name, email, message, isSubmitted }){
  return(
    <section>
      <h1>
        My name is {isSubmitted && name}
      </h1>

      <p>
        My email is {isSubmitted && email}
      </p>

      <p>
        My message is {isSubmitted && message}
      </p>
    </section>
  )
}

export default Result;