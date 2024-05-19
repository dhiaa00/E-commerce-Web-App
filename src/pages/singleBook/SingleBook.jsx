import React from "react";
import { products } from "../../data/products";
import Rating from "../../components/bookSlider/Rating";
import ModelAddToCart from "../../components/bookSlider/ModelAddToCart";
import "./singlebook.css";

const SingleBook = () => {
  const currentId = document.location.pathname.split("products/")[1];
  const currentBook = products[currentId];
  return (
    <div className="book">
      <div className="book-content">
        <img src={`/books/${currentBook.image}`} alt="" />
        <div className="book-content-details">
          <h1>{currentBook.title}</h1>
          <p>
            by <span>{currentBook.author}</span>
          </p>
          <Rating rating={currentBook.rating} reviews={currentBook.reviews} />
          <ModelAddToCart book={currentBook} />
          <div className="book-description">
            <h2>About the product</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              pariatur voluptatum quam voluptas nulla dolorum nisi
              necessitatibus laborum exercitationem, tenetur consequuntur alias
              magnam ab. Inventore vitae aperiam nesciunt voluptate odio. Ab
              provident placeat mollitia vitae nostrum ea eum id at sequi
              molestiae veritatis quibusdam nisi quis adipisci sit quod, labore
              facilis velit et? Perferendis quos fugit sed fuga explicabo
              et.lore Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laborum, facere tempore! Dolorem vitae aspernatur corporis quaerat
              iusto architecto esse, impedit non, porro dolores maiores nemo
              ratione quo. Earum, molestias aliquam?
            </p>
          </div>
        </div>
      </div>

      <div className="additional-details">
        {currentBook.printLength && (
          <div className="additional-detail">
            <h2>Print Length</h2>
            <i className="bi bi-file-earmark-break"></i>
            <p>{currentBook.printLength}</p>
          </div>
        )}
        {currentBook.language && (
          <div className="additional-detail">
            <h2>Print Length</h2>
            <i className="bi bi-file-earmark-break"></i>
            <p>{currentBook.language}</p>
          </div>
        )}
        <div className="additional-detail">
          <h2>Publication date</h2>
          <i className="bi bi-calendar3"></i>
          <p>{currentBook.PublicationDate}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
