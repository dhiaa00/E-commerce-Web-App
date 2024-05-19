import { useState, useEffect } from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/about";
import Contact from "./pages/Contact/Contact";
import Register from "./pages/forms/Register";
import Login from "./pages/forms/Login";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Cart from "./pages/cart/Cart";
import SingleBook from "./pages/singleBook/SingleBook";

function App() {
  const [menuClicked, setMenuClicked] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Provider store={store}>
      <Header menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<SingleBook />} />
      </Routes>
      <Footer />
    </Provider>
  );
}

export default App;
