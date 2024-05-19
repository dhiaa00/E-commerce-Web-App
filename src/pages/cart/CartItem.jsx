import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adding, deleteItem, minus } from "../../features/itemSlice";

const CartItem = ({ quantity, book }) => {
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const dispatch = useDispatch();
  const itemNumber = useSelector((state) => state.itemShoped.value);
  const itemsList = useSelector((state) => state.itemShoped.items);

  return (
    <div className="cart-item">
      <img src={`/books/${book.image}`} alt="book" />
      <div className="description-price">
        <div className="cart-item-description">
          <div className="cart-item-title">
            <span>Title: </span>
            {book.title}
          </div>
          <div className="cart-item-author">
            <span>Author: </span>
            {book.author}
          </div>
        </div>
        <div className="cart-item-price">
          <div className="item-quantity">
            <button
              className="price-button plus"
              onClick={() => {
                setItemQuantity(itemQuantity + 1);
                dispatch(adding(book.id));
              }}>
              +
            </button>
            {itemQuantity}
            {itemQuantity === 1 ? (
              <button disabled className="price-button minus">
                -
              </button>
            ) : (
              <button
                className="price-button minus"
                onClick={() => {
                  setItemQuantity(itemQuantity - 1);
                  dispatch(minus(book.id));
                }}>
                -
              </button>
            )}
          </div>
          <div className="item-price">
            ${(book.price * itemQuantity).toFixed(2)}
          </div>
        </div>
      </div>
      <i
        className="bi bi-trash-fill"
        onClick={() => {
          dispatch(deleteItem(book.id));
        }}></i>
    </div>
  );
};

export default CartItem;
