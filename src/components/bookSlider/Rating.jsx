import React from "react";

const Rating = ({ rating, reviews }) => {
  // generate stars
  const stars = (rating) => {
    const starlist = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        starlist.push(<i key={i} className="bi bi-star-fill"></i>);
      } else if (i - 0.5 === rating) {
        starlist.push(<i key={i} className="bi bi-star-half"></i>);
      } else {
        starlist.push(<i key={i} className="bi bi-star"></i>);
      }
    }
    return starlist;
  };
  return (
    <div className="review">
      {stars(rating)}
      {rating} ({reviews} reviews){" "}
    </div>
  );
};

export default Rating;
