import React from "react";
import { products } from "../../data/products";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import emptyCart from "../../images/empty-cart.png";
import "./cart.css";

const Cart = () => {
  const itemNumber = useSelector((state) => state.itemShoped.value);
  const itemList = useSelector((state) => state.itemShoped.items);
  const cartItemList = [];
  let totalPrice = 0;

  for (let i = 0; i < Object.keys(itemList).length; i++) {
    cartItemList.push(
      <CartItem
        key={i + 1}
        quantity={itemList[Object.keys(itemList)[i]]}
        book={products[Object.keys(itemList)[i] - 1]}
      />
    );
    totalPrice =
      totalPrice +
      products[Object.keys(itemList)[i] - 1].price *
        itemList[Object.keys(itemList)[i]];
  }

  return (
    <div className="cart-section">
      <div className="cart-items">
        {itemNumber === 0 ? (
          <>
            <img className="empty-cart-image" src={emptyCart} alt="cart" />
            <h1>
              Your Cart is <span className="empty">Empty</span>
            </h1>
          </>
        ) : (
          cartItemList
        )}
      </div>
      {itemNumber !== 0 && (
        <>
          <div className="final-price-section">
            <h3>ORDER SUMMARY</h3>
            <div className="final-price">
              <h4>Total: </h4>
              <p> ${totalPrice.toFixed(2)}</p>
            </div>
          </div>
          <div className="confirm-purchase-button">
            <button>Confirm Purchase</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
