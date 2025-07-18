function Popup({ task,date }) {
 
  return (

    <>
      <h3>{ task }</h3>
      <p>To be completed: {date}</p>
    </>
  );
}

export default Popup;
