import Controls from "./Controls";

function Display({ value }){

  return(
    <>
      <p className="font-semibold text-xl">
        The count is {value}
      </p>
      
    </>
  )
}

export default Display;