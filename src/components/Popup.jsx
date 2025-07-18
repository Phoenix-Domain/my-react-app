function Popup() {
 
  return (
    <>
      <section className="popup">
        <h2>Are you sure you want to delete?</h2>
        <article className="flex">
          <button className="yes">Confirm</button>
          <button className="no">Cancel</button>
        </article>
      </section>
    </>
  );
}

export default Popup;
