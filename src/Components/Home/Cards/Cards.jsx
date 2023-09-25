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
  const [chosenBook, setChosenBook] = useState({});
  const { lang } = useSelector((state) => state.lang);
  const endpoint = "https://nabd-server.onrender.com/";

  const handleChange = (e) => {
    setQuery(() => ({ ...query, [e.target.name]: e.target.value }));
  };

  const getAllBooks = async () => {
    const res = await axios.get(endpoint);
    setBooks(res.data);
  };

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
                <div className="bnr">
                  <Link to="/">
                    <img src={space} alt="space-banner-series" />
                  </Link>
                </div>
                <div className="bnr">
                  <Link to="/">
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
              <option value={""}>Select Age Group</option>
              <option value={"6 - 9 سنوات"}>6 - 9 Years</option>
              <option value={"9 - 12 سنوات"}>9 - 12 Years</option>
              <option value={"12 - 15 سنوات"}>12 - 15 Years</option>
              <option value={"15 - 20 سنوات"}>15 - 20 Years</option>
            </>
          ) : (
            <>
              <option value={""} dir="rtl">
                اختر الفئة العمرية
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
              <option value={""}>Select Category</option>
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
                اختر الفئة
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
      <div className="cards">
        {books.length > 0 ? (
          displayBooks()
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
