function ProductCard({ name, price, imageUrl}){
  return(
    <article>
      <h3>
        {name}
      </h3>

      <p>
        {price}
      </p>

      <img src={imageUrl} alt={`Photo of ${imageUrl}`} />
    </article>
  )
}

export default ProductCard;