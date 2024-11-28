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
    const res = await axios.get("https://nabdalqalam-backend.onrender.com");
    return res.data;
  };

  const { data: books, isLoading } = useQuery({
    queryKey: ["books"],
    queryFn: getAllBooks,
  });

  const ageGroups = {
    threeSix: ["6 - 9 سنوات", "From 3 years to 6 years"],
    sixNine: ["9 - 12 سنوات", "From 6 years to 9 years"],
    nineTwelve: ["12 - 15 سنوات", "From 9 years to 12 years"],
    twelveFifteen: ["15 - 20 سنوات", "From 12 years to 15 years"],
  };

  const handleChange = (e) => {
    setQuery(() => ({ ...query, [e.target.name]: e.target.value }));
    setWardanSeries(() => false);
    setSpaceSeries(() => false);
    setSearchParams((prev) => {
      if (e.target.name == "ageGroup") {
        if (e.target.value == ageGroups.threeSix[0]) {
          prev.set("group", ageGroups.threeSix[1]);
        } else if (e.target.value == ageGroups.sixNine[0]) {
          prev.set("group", ageGroups.sixNine[1]);
        } else if (e.target.value == ageGroups.nineTwelve[0]) {
          prev.set("group", ageGroups.nineTwelve[1]);
        } else if (e.target.value == ageGroups.twelveFifteen[0]) {
          prev.set("group", ageGroups.twelveFifteen[1]);
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
        />
      ));

    return spaceBooks;
  };

  useEffect(() => {
    if (group === "From 3 years to 6 years") {
      //! 3 - 6
      setQuery((prev) => ({ ...prev, ageGroup: "6 - 9 سنوات" }));
    } else if (group === "From 6 years to 9 years") {
      //! 6 - 9
      setQuery((prev) => ({ ...prev, ageGroup: "9 - 12 سنوات" }));
    } else if (group === "From 9 years to 12 years") {
      //! 9 - 12
      setQuery((prev) => ({ ...prev, ageGroup: "12 - 15 سنوات" }));
    } else if (group === "From 12 years to 15 years") {
      //! 12 - 15
      setQuery((prev) => ({ ...prev, ageGroup: "15 - 20 سنوات" }));
    }

    if (category) setQuery((prev) => ({ ...prev, category }));
  }, [category, group]);

  return {
    displayBooks,
    displayWardanSeries,
    displaySpaceSeries,
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
