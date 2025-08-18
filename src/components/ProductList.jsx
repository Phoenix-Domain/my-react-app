import ProductCard from "./ProductCard";
import { useState } from "react";

function ProductList(){
  const [productArr, setProductArr] = useState([])
  
  return(
    <section>
      <h1>Product List App</h1>

      <article>
        <ProductCard />
      </article>
    </section>
  )
}

export default ProductList;

//array, name, price, image