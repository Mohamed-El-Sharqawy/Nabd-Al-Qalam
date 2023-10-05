import Popup from "../Popup/Popup";
import ClipLoader from "react-spinners/ClipLoader";
import useDisplayBooks from "../../hooks/useDisplayBooks";
import { useEffect } from "react";

const Cards = () => {
  const queryParameters = new URLSearchParams(window.location.search);
  const group = queryParameters.get("group");
  const {
    handleChange,
    displayBooks,
    displayWardanSeries,
    displaySpaceSeries,
    setWardanSeries,
    setSpaceSeries,
    setPopup,
    setQuery,
    popup,
    lang,
    wardanSeries,
    spaceSeries,
    chosenBook,
    query,
    books,
  } = useDisplayBooks();

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
  }, []);

  return (
    <>
      <div className="books-filter">
        <select value={query.ageGroup} onChange={handleChange} name="ageGroup">
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
                displayBooks()?.length > 10
                  ? "كتاب"
                  : displayBooks()?.length === undefined
                  ? ""
                  : "كتب"
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
