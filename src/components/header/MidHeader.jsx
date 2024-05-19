import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { products } from "../../data/products";

const MidHeader = () => {
  const itemNumber = Object.keys(
    useSelector((state) => state.itemShoped.items)
  ).length;
  const [searchBooks, setSearchBooks] = useState("");
  const list = products
    .filter((book) => book.title.toLowerCase().includes(searchBooks))
    .map((e) => <Link to={`./products/${e.id - 1}`}>{e.title}</Link>);

  // make the search result disappear when changing the route
  const location = useLocation();
  useEffect(() => {
    setSearchBooks("");
  }, [location]);

  return (
    <div className="mid-header header-section">
      <Link to="./">
        <div className="logo">
          Sh<i className="bi bi-book"></i>py
        </div>
      </Link>
      <div className="search-box">
        <input
          type="search"
          placeholder="Search for Items.."
          value={searchBooks}
          onChange={(e) => setSearchBooks(e.target.value)}
        />
        <i className="bi bi-search"></i>
        {searchBooks && <div className="searched-items">{list}</div>}
      </div>
      <Link to="./cart" className="cart-link">
        {itemNumber !== 0 && (
          <div className="items">{itemNumber <= 9 ? itemNumber : "+9"}</div>
        )}
        <i className="bi bi-cart2"></i>
      </Link>
    </div>
  );
};

export default MidHeader;
