function ProductCard({ key, name, price, imageUrl}){
  return(
    <article>
      <h3>
        {key}. {name}
      </h3>

      <p>
        {price}
      </p>

      <img src={imageUrl} alt={`Photo of ${name}`} />
    </article>
  )
}

export default ProductCard;