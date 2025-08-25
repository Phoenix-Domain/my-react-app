function Card({ name, bio }){
  return(
    <div className="">
      <h1>{name}</h1>
      <p>{bio}</p>
      <button>Follow</button>
    </div>
  )
}

export default Card;