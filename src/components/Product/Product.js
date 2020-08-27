import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import "./Product.css";

const Product = (props) => {
//   console.log(props);
  const { img, name, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name">{name}</h4>
        <br />
        <p className="seller">
          <small>By:{seller}</small>
        </p>
        <p className="price">${price}</p>
        <p className="stock">
          <small>only {stock} left in stock - order soon</small>
        </p>
        <button 
            className="cart-btn"
            onClick={() => props.handleAddProduct(props.product)}
            >
            <FontAwesomeIcon icon={faShoppingCart} /> add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
