import React, { useRef } from "react";
import Rating from "./Rating";
import ModelAddToCart from "./ModelAddToCart";
import { Link } from "react-router-dom";

const Model = ({ setShowDetails, book }) => {
  const closeButton = useRef();

  return (
    <div className="model-container">
      <div className="model-content">
        <i
          ref={closeButton}
          className="bi bi-x-lg"
          onClick={() => {
            setShowDetails(-1);
          }}></i>
        <img src={`/books/${book.image}`} alt="book" />
        <div className="model-infos">
          <h2>{book.title}</h2>
          <div className="model-info">
            <span>Status:</span>
            On stock
          </div>
          <Rating rating={book.rating} reviews={book.reviews} />
          <div className="model-info">
            <span>By:</span>
            {book.author}
          </div>
          <div className="model-info">
            <span>Price:</span>${book.price}
          </div>
          <ModelAddToCart closeButton={closeButton} book={book} />
          <Link to={`./products/${book.id - 1}`} className="see-more-button">
            See More Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Model;
