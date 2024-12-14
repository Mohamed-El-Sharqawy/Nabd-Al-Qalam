import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getTotal } from "../../features/slices/cartSlice";
import { toast } from "react-toastify";
import { useState } from "react";
import "../../pages/AddBooks/addBooks.css";
import axios from "axios";

const SingleCard = ({ book, popup, setPopup, setChosenBook, refetch }) => {
  const { lang } = useSelector((state) => state.lang);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [isEditFormShown, setIsEditFormShown] = useState(false);
  const [data, setData] = useState(book);

  const handleChange = (e) => {
    setData(() => ({ ...data, [e.target.name]: e.target.value }));
  };

  const handleFileUpload = async (e) => {
    const file = await e.target.files[0];
    const base64 = await convertToBase64(file);
    setData(() => ({ ...data, img: base64 }));
  };

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(
        `https://nabdalqalam-backend.onrender.com/edit/${data._id}`,
        data
      );

      setData(res.data.book);
      await refetch();
      setIsEditFormShown(false);
      toast.success("Book was Edited Successfully", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        toastId: "add-to-cart-toast",
      });
    } catch (err) {
      console.err(err.message);
    }
  };

  return (
    <div className="card">
      {isEditFormShown && (
        <>
          <form
            onSubmit={handleSubmit}
            style={{
              position: "fixed",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1000,
              backgroundColor: "#c0114c",
              maxWidth: "500px",
              width: "100%",
              height: "500px",
              overflow: "auto",
              borderRadius: "0.5rem",
            }}
          >
            <div
              style={{
                display: "grid",
                gap: "1rem",
                padding: "1rem",
              }}
            >
              <input
                style={{
                  borderRadius: "0.5rem",
                  padding: "0.25rem 0.5rem",
                  border: "1px solid #777",
                  outline: "none",
                }}
                type="text"
                placeholder="ar title"
                value={data.arTitle}
                onChange={handleChange}
                name="arTitle"
              />
              <input
                style={{
                  borderRadius: "0.5rem",
                  padding: "0.25rem 0.5rem",
                  border: "1px solid #777",
                  outline: "none",
                }}
                type="text"
                placeholder="en title"
                value={data.enTitle}
                onChange={handleChange}
                name="enTitle"
              />
              <input
                style={{
                  borderRadius: "0.5rem",
                  padding: "0.25rem 0.5rem",
                  border: "1px solid #777",
                  outline: "none",
                }}
                type="text"
                placeholder="ar description"
                value={data.arDescription}
                onChange={handleChange}
                name="arDescription"
              />
              <input
                style={{
                  borderRadius: "0.5rem",
                  padding: "0.25rem 0.5rem",
                  border: "1px solid #777",
                  outline: "none",
                }}
                type="text"
                placeholder="en description"
                value={data.enDescription}
                onChange={handleChange}
                name="enDescription"
              />
              <input
                style={{
                  borderRadius: "0.5rem",
                  padding: "0.25rem 0.5rem",
                  border: "1px solid #777",
                  outline: "none",
                }}
                type="text"
                placeholder="ar author"
                value={data.arAuthor}
                onChange={handleChange}
                name="arAuthor"
              />
              <input
                style={{
                  borderRadius: "0.5rem",
                  padding: "0.25rem 0.5rem",
                  border: "1px solid #777",
                  outline: "none",
                }}
                type="text"
                placeholder="en author"
                value={data.enAuthor}
                onChange={handleChange}
                name="enAuthor"
              />
              <input
                style={{
                  borderRadius: "0.5rem",
                  padding: "0.25rem 0.5rem",
                  border: "1px solid #777",
                  outline: "none",
                }}
                type="number"
                placeholder="price"
                value={data.price}
                onChange={handleChange}
                name="price"
              />
            </div>
            <div
              style={{
                display: "grid",
                gap: "1rem",
                padding: "1rem",
              }}
            >
              <select
                required
                name="category"
                value={data.category}
                onChange={handleChange}
              >
                <option dir="rtl">اختر الفئة من فضلك</option>
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
              </select>
              <select
                required
                name="ageGroup"
                value={data.ageGroup}
                onChange={handleChange}
              >
                <option dir="rtl">اختر الفئة العمرية من فضلك</option>
                <option value={"0-3"} dir="rtl">
                  0 - 3 سنوات
                </option>
                <option value={"3-5"} dir="rtl">
                  3 - 5 سنوات
                </option>
                <option value={"6-9"} dir="rtl">
                  6 - 9 سنوات
                </option>
                <option value={"9-12"} dir="rtl">
                  9 - 12 سنوات
                </option>
                <option value={"12-17"} dir="rtl">
                  12 - 17 سنوات
                </option>
              </select>
              <label htmlFor="file-upload">
                <img
                  src={`${
                    data?.img ||
                    "https://media.istockphoto.com/id/1328167226/vector/open-book.jpg?s=612x612&w=0&k=20&c=yqfKR7Es5IDuM20rtyg4xZihaGTl2waDtvucK1YCTIw="
                  }`}
                  alt="book"
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "contain",
                    borderRadius: "0.5rem",
                  }}
                />
              </label>
              <input
                type="file"
                aria-label="Image"
                id="file-upload"
                accept=".jpeg, .png, .jpg, .webp"
                onChange={(e) => handleFileUpload(e)}
                name="book_img"
                key={+(book.img.length > 0)}
              />
            </div>

            <button
              title="logout"
              className="auth-btn"
              style={{
                border: "1px solid rgb(0,0,0,0)",
                outline: "none",
                margin: "0 auto 1rem",
                display: "block",
              }}
            >
              {lang == "en" ? "Save" : "حفظ"}
            </button>
          </form>

          <div
            onClick={() => setIsEditFormShown(false)}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "black",
              opacity: 0.5,
              zIndex: 999,
            }}
          />
        </>
      )}
      <div className="card-img">
        <img
          src={book.img}
          alt={lang === "en" ? book.enTitle : book.arTitle}
          title={lang === "en" ? book.enTitle : book.arTitle}
        />
      </div>
      <div
        style={
          lang === "en"
            ? { flexDirection: "row" }
            : { flexDirection: "row-reverse" }
        }
        className="card-caption"
      >
        <p className="caption" dir={lang === "en" ? "ltr" : "rtl"}>
          {lang === "en" ? book.enTitle : book.arTitle}
        </p>
        <span style={{
          display: "flex",
          alignItems: "center",
        }} className="price" dir={lang === "en" ? "ltr" : "rtl"}>
          {book.price}
          {lang === "en" ? " AED" : " درهم"}
        </span>
      </div>
      <div
        className="shopping"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="icons">
          {/* <FavoriteBorderOutlinedIcon /> */}
          <RemoveRedEyeOutlinedIcon
            onClick={() => {
              if (popup) return;
              setPopup(!popup);
              setChosenBook(book);
            }}
          />
        </div>
        {user.isAdmin && (
          <button
            onClick={() => setIsEditFormShown(true)}
            className="edit-admin"
          >
            Edit
          </button>
        )}
        <button
          className="btn"
          onClick={() => {
            dispatch(addToCart(book));
            dispatch(getTotal());
            toast.success("Added to The Cart", {
              position: "bottom-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              toastId: "add-to-cart-toast",
            });
          }}
        >
          {lang === "en" ? " Add to cart" : "أضف الى العربة"}
        </button>
      </div>
    </div>
  );
};

export default SingleCard;
