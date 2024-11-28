// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getTotal } from "../../features/slices/cartSlice";
import { toast } from "react-toastify";
import { useState } from "react";
import "../../pages/AddBooks/addBooks.css"

const SingleCard = ({ book, popup, setPopup, setChosenBook }) => {
  const { lang } = useSelector((state) => state.lang);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [isEditFormShown, setIsEditFormShown] = useState(false);
  const defaultFormData = {
    arTitle: "",
    enTitle: "",
    arDescription: "",
    enDescription: "",
    arAuthor: "",
    enAuthor: "",
    numberOfPages: "",
    price: "",
    category: "",
    ageGroup: "اختر الفئة العمرية من فضلك",
    img: "",
  };
  const [data, setData] = useState(defaultFormData);

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

  return (
    <div className="card">
      {isEditFormShown && (
        <>
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 1000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#c0114c",
              }}
            >
              <input type="text" placeholder="ar title" />
              <input type="text" placeholder="en title" />
              <input type="text" placeholder="ar description" />
              <input type="text" placeholder="en description" />
              <input type="text" placeholder="ar author" />
              <input type="text" placeholder="en author" />
              <input type="number" placeholder="price" />
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
                <option value={"0 - 3 سنوات"} dir="rtl">
                  0 - 3 سنوات
                </option>
                <option value={"6 - 9 سنوات"} dir="rtl">
                  3 - 6 سنوات
                </option>
                <option value={"9 - 12 سنوات"} dir="rtl">
                  6 - 9 سنوات
                </option>
                <option value={"12 - 15 سنوات"} dir="rtl">
                  9 - 12 سنوات
                </option>
                <option value={"15 - 20 سنوات"} dir="rtl">
                  12 - 17 سنوات
                </option>
                <option value={"17 - 20 سنوات"} dir="rtl">
                  17 - 20 سنوات
                </option>
              </select>
              <label htmlFor="file-upload">
                <img
                  src={`${
                    data?.img ||
                    "https://media.istockphoto.com/id/1328167226/vector/open-book.jpg?s=612x612&w=0&k=20&c=yqfKR7Es5IDuM20rtyg4xZihaGTl2waDtvucK1YCTIw="
                  }`}
                  alt="book"
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
          </div>

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
        <span
          className="price"
          dir={lang === "en" ? "ltr" : "rtl"}
          style={{ justifyContent: "end" }}
        >
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
