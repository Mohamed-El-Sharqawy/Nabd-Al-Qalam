import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import SingleCard from "../SingleCard/SingleCard";
import Popup from "../Popup/Popup";

const Cards = () => {
  const [popup, setPopup] = useState(false);
  const [books, setBooks] = useState([]);
  const [chosenBook, setChosenBook] = useState({});
  const endpoint = "http://localhost:3001/";

  const getAllBooks = async () => {
    const res = await axios.get(endpoint);
    setBooks(res.data);
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <div className="cards">
      {books.length > 0 ? (
        books.map((book) => (
          <SingleCard
            key={book._id}
            popup={popup}
            setChosenBook={setChosenBook}
            setPopup={setPopup}
            book={book}
          />
        ))
      ) : (
        <h1>Loading ...</h1>
      )}

      <Popup chosenBook={chosenBook} popup={popup} setPopup={setPopup} />

      {/* Banners */}
      <div className="twobanner">
        <div className="bnr">
          <Link to="/">
            <img src="/src/assets/banner-space.jpg" alt="" />
          </Link>
        </div>
        <div className="bnr">
          <Link to="/">
            <img src="/src/assets/banner-wardan.jpg" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
