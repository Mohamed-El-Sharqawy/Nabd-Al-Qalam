import React, { useEffect, useState } from "react";
import axios from "axios";
import { space, wardan } from "../assets/images";
import { Link } from "react-router-dom";
import SingleCard from "../Components/SingleCard/SingleCard";

const useDisplayBooks = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState({ ageGroup: "", category: "" });
  const [wardanSeries, setWardanSeries] = useState(false);
  const [spaceSeries, setSpaceSeries] = useState(false);
  const [popup, setPopup] = useState(false);
  const [chosenBook, setChosenBook] = useState({});

  const handleChange = (e) => {
    setQuery(() => ({ ...query, [e.target.name]: e.target.value }));
    setWardanSeries(() => false);
    setSpaceSeries(() => false);
  };

  //* Filter and Display Books
  const displayBooks = () => {
    const filteredBooks = books
      .filter((singleBook) => {
        if (query.ageGroup == "" && query.category == "") {
          return singleBook;
        } else if (query.ageGroup == "") {
          return singleBook.category == query.category;
        } else if (query.category == "") {
          return singleBook.ageGroup == query.ageGroup;
        } else {
          return (
            singleBook.ageGroup == query?.ageGroup &&
            singleBook.category == query?.category
          );
        }
      })
      .map((book, index) => {
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
                {/* Space */}
                <div className="bnr">
                  <Link
                    onClick={() => {
                      setSpaceSeries(() => true);
                      window.scroll({
                        top: 0,
                      });
                    }}
                  >
                    <img src={space} alt="space-banner-series" />
                  </Link>
                </div>
                {/* Wardan */}
                <div className="bnr">
                  <Link
                    onClick={() => {
                      setWardanSeries(() => true);
                      window.scroll({
                        top: 0,
                      });
                    }}
                  >
                    <img src={wardan} alt="wardan-banner-series" />
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
      });

    if (filteredBooks.length == 0) {
      return (
        <h1 style={{ color: "#c0114c", textAlign: "center", fontSize: "22px" }}>
          {lang === "en"
            ? "There is No Books for this Age and Category"
            : "لا يوجد كتب لهذه الفئة والفئة العمرية"}
        </h1>
      );
    } else {
      return filteredBooks;
    }
  };

  //* Filter and Display Wardan Series
  const displayWardanSeries = () => {
    const wardanBooks = books
      .filter((singleBook) =>
        singleBook.enTitle.toLowerCase().includes("wardan")
      )
      .map((book) => (
        <SingleCard
          key={book._id}
          popup={popup}
          setChosenBook={setChosenBook}
          setPopup={setPopup}
          book={book}
        />
      ));

    return wardanBooks;
  };

  //* Filter and Display Space Series
  const displaySpaceSeries = () => {
    const spaceBooks = books
      .filter((singleBook) =>
        singleBook.enTitle.toLowerCase().includes("space")
      )
      .map((book) => (
        <SingleCard
          key={book._id}
          popup={popup}
          setChosenBook={setChosenBook}
          setPopup={setPopup}
          book={book}
        />
      ));

    return spaceBooks;
  };

  //* Fetch the Books Endpoint
  const getAllBooks = async () => {
    const res = await axios.get(import.meta.env.VITE_BOOKS_ENDPOINT);
    setBooks(res.data);
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  return {
    displayBooks,
    displayWardanSeries,
    displaySpaceSeries,
    handleChange,
    setWardanSeries,
    setSpaceSeries,
    setPopup,
    popup,
    wardanSeries,
    spaceSeries,
    chosenBook,
    query,
    books,
  };
};

export default useDisplayBooks;
