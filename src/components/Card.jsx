function Card({ name, bio }){
  return(
    <div className="my-4 w-fit p-2 flex flex-col items-start bg-purple-600 mx-auto rounded-xl">
      <h1 className='text-white font-bold text-5xl mb-3'>{name}</h1>
      <p className="text-gray-300 text-xl">{bio}</p>
      <button className="bg-blue-700 py-2 px-4 mt-4 rounded-xl text-white">Show More</button>
    </div>
  )
}

export default Card;