import { useState } from "react";

function Card({ name, bio, role, about }){
  const [showMore, setShowMore] = useState(false);

  function toggleShowMore(){
    setShowMore(!showMore);
  }

  function displayBtnContent(){
    return showMore ? 'Less' : 'More'
  }
  
  return(
    <div className="my-4 w-fit p-2 flex flex-col items-start bg-purple-600 mx-auto rounded-xl">
      <h1 className='text-white font-bold text-5xl mb-3'>{name}</h1>

      <p className="text-gray-300 text-xl my-2">{bio}</p>

      {
        showMore && <article>
          <p className="text-gray-300 text-xl my-2">{role}</p>

          <p className="text-gray-300 text-xl my-2">{about}</p>
        </article>
      }

      <button className="bg-blue-700 py-2 px-4 mt-4 rounded-xl text-white" onClick={() => toggleShowMore()}>Show {displayBtnContent()}</button>
    </div>
  )
}

export default Card;