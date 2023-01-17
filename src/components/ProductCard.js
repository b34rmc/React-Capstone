import "../styles/ProductCard.scss";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import TruncateInator from "./TruncateInator";
export default function ProductCard(props) {
  return (
    <div className="product-card">
      <Link to={`products/${props.product.id}`}>
        <div className="top">
          <div
            className="img"
            style={{ backgroundImage: `url(${props.product.image})` }}
          ></div>
        </div>
      </Link>
      <div className="bottom">
        <Link to={`products/${props.product.id}`}>
          <div className="title">
            <p>{TruncateInator(55, props.product.title)}</p>
          </div>
          <div className="score">
            <Rating
              readonly={true}
              allowFraction={true}
              initialValue={props.product.rating.rate}
              size="16"
            />
            <p>{props.product.rating.count}</p>
          </div>
          <div className="cost">
            <p>Price: ${props.product.price}</p>
          </div>
        </Link>
        <button onClick={() => props.addProduct(props.product)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}
