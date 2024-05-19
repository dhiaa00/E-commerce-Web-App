import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { adding } from "../../features/itemSlice";

const ModelAddToCart = ({ closeButton, book }) => {
  const [bookNumber, setBookNumber] = useState(1);
  const handleAddToCart = () => {
    for (let i = 0; i < bookNumber; i++) {
      dispatch(adding(book.id));
    }
    closeButton ? closeButton.current.click() : null;
  };

  const dispatch = useDispatch();
  return (
    <div className="model-info">
      <input
        type="number"
        value={bookNumber}
        onChange={(e) => {
          if (e.target.value <= 1) {
            setBookNumber(1);
          } else {
            setBookNumber(e.target.value);
          }
        }}
      />
      <button className="add-to-cart-button" onClick={handleAddToCart}>
        <i className="bi bi-cart-plus"></i>
        Add To Cart
      </button>
    </div>
  );
};

export default ModelAddToCart;
