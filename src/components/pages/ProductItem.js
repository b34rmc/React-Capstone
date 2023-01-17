import { useState, useEffect } from "react";

import "../../styles/ProductItem.scss";

export default function ProductItem(props) {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${props.match.params.id}`)
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((err) => console.log("Fetch Single Product Error: ", err));
  }, [props]);

  return (
    <div className="product-overview-container">
      <div className="product-overview-wrapper" key={item.id}>
        <div
          className="img-container"
          style={{ backgroundImage: `url(${item.image})` }}
        ></div>
        <div className="info-container">
          <div className="top">
            <div className="title-container">
              <p>{item.title}</p>
            </div>
            <div className="price">
              <p>Price- ${item.price}</p>
            </div>
          </div>
          <div className="description">
            <p>Description:</p>
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
