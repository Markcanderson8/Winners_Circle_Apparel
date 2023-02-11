import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../product-card/ProductCard";
import style from "./singleProductPage.module.css";
import fetchProducts from '../../product-page/ProductPageService';

const SingleProductPage = () => {
  const [apiError, setApiError] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const params = useParams();
  
  useEffect(() => {
    fetchProducts(setProducts, setFilteredProducts, setApiError);
  }, []);

  return (
      <div className={style.productContainer}>
        {products.filter(p => p.id == Number(params.id)).map((filteredProduct) => (
          <>
            <div className={style.title}>
              <h1>{filteredProduct.name}</h1>
            </div>
            <div className={style.innerContainer}>
              <div className={style.productCard} key={filteredProduct.id}>
                <ProductCard product={filteredProduct} />
              </div>
            </div>
          </>
        ))}
      </div>
  )
}

export default SingleProductPage;