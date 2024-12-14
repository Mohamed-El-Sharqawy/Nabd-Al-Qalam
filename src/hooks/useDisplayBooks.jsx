import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import SingleCard from "../Components/SingleCard/SingleCard";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

const useDisplayBooks = () => {
  const [searchValue, setSearchValue] = useState("");
  const { lang } = useSelector((state) => state.lang);
  const [query, setQuery] = useState({ ageGroup: "", category: "" });
  const [wardanSeries, setWardanSeries] = useState(false);
  const [spaceSeries, setSpaceSeries] = useState(false);
  const [popup, setPopup] = useState(false);
  const [chosenBook, setChosenBook] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const group = searchParams.get("group");
  const category = searchParams.get("category");

  const getAllBooks = async () => {
    const res = await axios.get("https://nabdalqalam-backend.onrender.com/");
    return res.data;
  };

  const {
    data: books,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["books"],
    queryFn: getAllBooks,
  });

  const ageGroups = {
    zeroThree: "0-3",
    threeFive: "3-5",
    sixNine: "6-9",
    nineTwelve: "9-12",
    twelveSeventeen: "12-17",
  };

  const handleChange = (e) => {
    setQuery(() => ({ ...query, [e.target.name]: e.target.value }));
    setWardanSeries(() => false);
    setSpaceSeries(() => false);
    setSearchParams((prev) => {
      if (e.target.name == "ageGroup") {
        if (e.target.value == ageGroups.threeFive) {
          prev.set("group", ageGroups.threeFive);
        } else if (e.target.value == ageGroups.sixNine) {
          prev.set("group", ageGroups.sixNine);
        } else if (e.target.value == ageGroups.nineTwelve) {
          prev.set("group", ageGroups.nineTwelve);
        } else if (e.target.value == ageGroups.twelveSeventeen) {
          prev.set("group", ageGroups.twelveSeventeen);
        } else {
          prev.set("group", "");
        }
      } else {
        prev.set("category", e.target.value);
      }

      return prev;
    });
  };

  //* Filter and Display Books
  const displayBooks = () => {
    const filteredBooks = books
      ?.filter((singleBook) => {
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
      .filter((book) =>
        lang == "ar"
          ? book?.arTitle?.toLowerCase().includes(searchValue?.toLowerCase())
          : book?.enTitle?.toLowerCase().includes(searchValue?.toLowerCase())
      )
      ?.map((book, index) => {
        if (index == 15 || index == 31) {
          return (
            <React.Fragment key={book._id}>
              <SingleCard
                popup={popup}
                setChosenBook={setChosenBook}
                setPopup={setPopup}
                book={book}
                refetch={refetch}
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
                    <img
                      src={
                        "https://res.cloudinary.com/dxfphp6to/image/upload/v1697903946/nabdu_al_qalam/banner-space_zrprfy.jpg"
                      }
                      alt="space-banner-series"
                    />
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
                    <img
                      src={
                        "https://res.cloudinary.com/dxfphp6to/image/upload/v1697903946/nabdu_al_qalam/banner-wardan_xd8n1t.jpg"
                      }
                      alt="wardan-banner-series"
                    />
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
            refetch={refetch}
          />
        );
      });

    if (filteredBooks?.length == 0) {
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

  const displayPopularBooks = () => {
    const popularBooks = books
      ?.filter((singleBook) => singleBook.popular)
      ?.map((book) => (
        <SingleCard
          key={book._id}
          popup={popup}
          setChosenBook={setChosenBook}
          setPopup={setPopup}
          book={book}
          refetch={refetch}
        />
      ));

    return popularBooks;
  };

  //* Filter and Display Wardan Series
  const displayWardanSeries = () => {
    const wardanBooks = books
      ?.filter((singleBook) =>
        singleBook.enTitle.toLowerCase().includes("wardan")
      )
      ?.map((book) => (
        <SingleCard
          key={book._id}
          popup={popup}
          setChosenBook={setChosenBook}
          setPopup={setPopup}
          book={book}
          refetch={refetch}
        />
      ));

    return wardanBooks;
  };

  //* Filter and Display Space Series
  const displaySpaceSeries = () => {
    const spaceBooks = books
      ?.filter((singleBook) =>
        singleBook.enTitle.toLowerCase().includes("space")
      )
      ?.map((book) => (
        <SingleCard
          key={book._id}
          popup={popup}
          setChosenBook={setChosenBook}
          setPopup={setPopup}
          book={book}
          refetch={refetch}
        />
      ));

    return spaceBooks;
  };

  useEffect(() => {
    if (group === "0-3") {
      //! 0 - 3
      setQuery((prev) => ({ ...prev, ageGroup: "0-3" }));
    } else if (group === "3-5") {
      //! 3 - 5
      setQuery((prev) => ({ ...prev, ageGroup: "3-5" }));
    } else if (group === "6-9") {
      //! 6 - 9
      setQuery((prev) => ({ ...prev, ageGroup: "6-9" }));
    } else if (group === "9-12") {
      //! 9 - 12
      setQuery((prev) => ({ ...prev, ageGroup: "9-12" }));
    } else if (group === "12-17") {
      //! 12 - 17
      setQuery((prev) => ({ ...prev, ageGroup: "12-17" }));
    }

    if (category) setQuery((prev) => ({ ...prev, category }));
  }, [category, group]);

  return {
    displayBooks,
    displayWardanSeries,
    displaySpaceSeries,
    displayPopularBooks,
    handleChange,
    setWardanSeries,
    setSpaceSeries,
    setPopup,
    setQuery,
    setSearchParams,
    popup,
    group,
    category,
    lang,
    wardanSeries,
    spaceSeries,
    chosenBook,
    query,
    books,
    isLoading,
    setSearchValue,
    searchValue,
  };
};

export default useDisplayBooks;
