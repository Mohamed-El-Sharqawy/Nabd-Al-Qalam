import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import SingleCard from "../SingleCard/SingleCard";
import Popup from "../Popup/Popup";
import ClipLoader from "react-spinners/ClipLoader";

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
        books.map((book, index) => {
          if (index == 15 || index == 31) {
            return (
              <React.Fragment key={book._id}>
                <SingleCard
                  popup={popup}
                  setChosenBook={setChosenBook}
                  setPopup={setPopup}
                  book={book}
                />
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
              </React.Fragment>
            );
          }

          return (
            <SingleCard
              key={book._id}
              popup={popup}
              setChosenBook={setChosenBook}
              setPopup={setPopup}
              book={book}
            />
          );
        })
      ) : (
        <div className="cards">
          <ClipLoader size={100} color="#36d7b7" />
        </div>
      )}

      <Popup chosenBook={chosenBook} popup={popup} setPopup={setPopup} />
    </div>
  );
};

export default Cards;
