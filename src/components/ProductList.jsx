import ProductCard from "./ProductCard";
import { useState } from "react";

function ProductList(){
  const [productArr, setProductArr] = useState([
    {
      name: "Product 1",
      price: "$10.00",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      name: "Product 2",
      price: "$20.00",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      name: "Product 3",
      price: "$30.00",
      imageUrl: "https://via.placeholder.com/150"
    }
  ])
  
  return(
    <section>
      <h1>Product List App</h1>

      <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {productArr.map((product, index) => (
          <ProductCard 
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </article>
    </section>
  )
}

export default ProductList;

//array, name, price, image