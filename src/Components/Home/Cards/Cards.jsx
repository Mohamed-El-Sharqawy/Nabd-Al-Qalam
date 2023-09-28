import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import SingleCard from "../SingleCard/SingleCard";
import Popup from "../Popup/Popup";
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector } from "react-redux";
import { space, wardan } from "../../../assets/images";

const Cards = () => {
  const [query, setQuery] = useState({ ageGroup: "", category: "" });
  const [popup, setPopup] = useState(false);
  const [books, setBooks] = useState([]);
  const [wardanSeries, setWardanSeries] = useState(false);
  const [spaceSeries, setSpaceSeries] = useState(false);
  const [chosenBook, setChosenBook] = useState({});
  const { lang } = useSelector((state) => state.lang);

  const handleChange = (e) => {
    setQuery(() => ({ ...query, [e.target.name]: e.target.value }));
    setWardanSeries(() => false);
    setSpaceSeries(() => false);
  };

  const getAllBooks = async () => {
    const res = await axios.get(import.meta.env.VITE_BOOKS_ENDPOINT);
    setBooks(res.data);
  };

  // Display Wardan Series
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

  // Display Space Series
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

  //! Filter and Display Books
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

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <>
      <div className="books-filter">
        <select onChange={handleChange} name="ageGroup">
          {lang === "en" ? (
            <>
              <option value={""}>All Age Groups</option>
              <option value={"6 - 9 سنوات"}>6 - 9 Years</option>
              <option value={"9 - 12 سنوات"}>9 - 12 Years</option>
              <option value={"12 - 15 سنوات"}>12 - 15 Years</option>
              <option value={"15 - 20 سنوات"}>15 - 20 Years</option>
            </>
          ) : (
            <>
              <option value={""} dir="rtl">
                كل الفئات العمرية
              </option>
              <option value={"6 - 9 سنوات"} dir="rtl">
                6 - 9 سنوات
              </option>
              <option value={"9 - 12 سنوات"} dir="rtl">
                9 - 12 سنوات
              </option>
              <option value={"12 - 15 سنوات"} dir="rtl">
                12 - 15 سنوات
              </option>
              <option value={"15 - 20 سنوات"} dir="rtl">
                15 - 20 سنوات
              </option>
            </>
          )}
        </select>
        <select onChange={handleChange} name="category">
          {lang === "en" ? (
            <>
              <option value={""}>All Categories</option>
              <option value="مغامرات">Adventures</option>
              <option value="فضاء">Space</option>
              <option value="التراث الاماراتي">Emirati Heritage</option>
              <option value="الحفاظ علي البيئة">
                Protecting the environment
              </option>
              <option value="روايات">Novels</option>
              <option value="تنمية ذاتية">Self Development</option>
              <option value="كتب متنوعة">Various books</option>
              <option value="كتب اسلامية">Islamic books</option>
              <option value="وسائل تعليمية">Teaching Aids</option>
            </>
          ) : (
            <>
              <option value={""} dir="rtl">
                كل الفئات
              </option>
              <option dir="rtl" value="مغامرات">
                مغامرات
              </option>
              <option dir="rtl" value="فضاء">
                فضاء
              </option>
              <option dir="rtl" value="التراث الاماراتي">
                التراث الاماراتي
              </option>
              <option dir="rtl" value="الحفاظ علي البيئة">
                الحفاظ علي البيئة
              </option>
              <option dir="rtl" value="روايات">
                روايات
              </option>
              <option dir="rtl" value="تنمية ذاتية">
                تنمية ذاتية
              </option>
              <option dir="rtl" value="كتب متنوعة">
                كتب متنوعة
              </option>
              <option dir="rtl" value="كتب اسلامية">
                كتب اسلامية
              </option>
              <option dir="rtl" value="وسائل تعليمية">
                وسائل تعليمية
              </option>
            </>
          )}
        </select>
      </div>
      {query?.ageGroup == "" && query?.category == "" ? (
        ""
      ) : (
        <h4 className="products-number">
          {lang === "en"
            ? `Results : ${displayBooks()?.length || "Nothing Found"} ${
                displayBooks()?.length > 1
                  ? "Books"
                  : displayBooks()?.length === undefined
                  ? ""
                  : "Book"
              }`
            : `النتائج : ${displayBooks()?.length || "لا توجد نتائج"} ${
                displayBooks()?.length > 10 ? "كتاب" : "كتب"
              }`}
        </h4>
      )}
      {(wardanSeries || spaceSeries) && (
        <h4
          onClick={() => {
            setWardanSeries(() => false);
            setSpaceSeries(() => false);
          }}
          className="show-btn"
          style={{ cursor: "pointer" }}
        >
          {lang === "en" ? "Show All" : "اظهار الكل"}
        </h4>
      )}
      <div className="cards">
        {books.length > 0 ? (
          !wardanSeries && !spaceSeries ? (
            displayBooks()
          ) : wardanSeries ? (
            displayWardanSeries()
          ) : spaceSeries ? (
            displaySpaceSeries()
          ) : null
        ) : (
          <div className="cards">
            <ClipLoader size={100} color="#36d7b7" />
          </div>
        )}

        <Popup chosenBook={chosenBook} popup={popup} setPopup={setPopup} />
      </div>
    </>
  );
};

export default Cards;
