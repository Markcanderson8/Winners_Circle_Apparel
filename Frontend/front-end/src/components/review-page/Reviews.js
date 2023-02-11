import { Avatar } from "@material-ui/core";
import { Star, StarBorder, StarOutline, StarRate, StarRateOutlined } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchProducts from "../product-page/ProductPageService";
import "./reviews.css";

const Reviews = () => {
  const [apiError, setApiError] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);

  const params = useParams();

  useEffect(() => {
    fetchProducts(setProducts, setFilteredProducts, setApiError);
  }, []);

  const starCount = (review) => {
    let stars = [];
    for (let i = 0; i < review[2]; i++) {
      stars.push(<Star className="stars" key={i} />)
    }
    for (let y = 5; y > review[2]; y--) {
      stars.push(<StarBorder className="stars" key={y} />)
    };
    return stars;
  }

  return (
    <div className="app">
      {products.filter(p => p.id == Number(params.id)).map((filteredProduct) => (
        <div key={filteredProduct.id}>
          <h2>{filteredProduct.name} reviews:</h2>
          <ul className="reviews">
            {filteredProduct.reviews.map(r => (
              <li className="review" key={r[1] + r[2]}>
                <Avatar className="user-pic"/> <div className="user">{r[1]}</div>
                <br />
                <div className="review-title">{starCount(r)}{r[0]}</div>
                <div className="colorName">Color: {filteredProduct.colorName}</div>
                <div className="review-description">
                  Filler description for why {r[1]} rated the {filteredProduct.name} {r[2]} stars
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
export default Reviews;