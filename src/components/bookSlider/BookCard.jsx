import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adding } from "../../features/itemSlice";
import Rating from "./Rating";
import useWindowDimensions from "../../features/useWindowDimensions";

const BookCard = ({
  setShowDetails,
  leftClicked,
  setRightDisappear,
  last,
  book,
}) => {
  // redux toolkit items state
  const dispatch = useDispatch();
  const itemNumber = useSelector((state) => state.itemShoped.value);
  const itemsList = useSelector((state) => state.itemShoped.items);

  const handleAddToCart = () => {
    dispatch(adding(book.id));
  };

  //stop swipping

  const { height, width } = useWindowDimensions();
  const lastBook = last ? useRef() : null;
  if (last && lastBook.current) {
    const elem = lastBook.current.getBoundingClientRect();
    if (!leftClicked && elem.x <= width) {
      setRightDisappear(true);
    }
  }

  return (
    <>
      <div ref={lastBook} className="book-card">
        <img src={`/books/${book.image}`} alt="book" />
        <div className="info">
          <div className="book-info">
            <h3> {book.title} </h3>
            <div className="price-rating">
              <Rating rating={book.rating} reviews={book.reviews} />
              <div className="price"> ${book.price} </div>
            </div>
          </div>
          <div className="card-footer">
            <i
              className="bi bi-eye-fill"
              onClick={() => {
                setShowDetails(book.id);
              }}></i>
            <i className="bi bi-cart-plus" onClick={handleAddToCart}></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookCard;
