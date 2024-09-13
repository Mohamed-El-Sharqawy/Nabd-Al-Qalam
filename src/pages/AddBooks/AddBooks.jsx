import { useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import axios from "axios";
import "./addBooks.css";

const AddBooks = () => {
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

  const { lang } = useSelector((state) => state.lang);
  const { user } = useSelector((state) => state.auth);
  const [book, setBook] = useState(defaultFormData);
  const formRef = useRef(null);
  const navigate = useNavigate();

  const postBook = async (newBook) => {
    try {
      await axios.post("https://nabd-al-qalam-server-production.up.railway.app/add-books", newBook);

      toast.success("Book Was Created Successfully");
      setBook(defaultFormData);
    } catch (err) {
      toast.error("Please Try Again !", {
        toastId: "invalid_book_data",
      });
      console.error("Couldn't read => ", err);
    }
  };

  // Mutations
  const mutation = useMutation({
    mutationFn: postBook,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    mutation.mutate(book);
  };

  const handleChange = (e) => {
    setBook(() => ({ ...book, [e.target.name]: e.target.value }));
  };

  const handleFileUpload = async (e) => {
    const file = await e.target.files[0];
    const base64 = await convertToBase64(file);
    setBook(() => ({ ...book, img: base64 }));
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

  if (!user.isAdmin) {
    return navigate("/");
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="add-form">
      <div className="heading-book">
        <Link style={{
          margin: "0 auto 1rem",
          display: "block",
          width: "fit-content",
          backgroundColor: "rgb(235, 184, 117)",
          color: "white",
          padding: "0.5rem 0.85rem",
          borderRadius: "0.5rem",
        }} to={"/orders"}>الطلبات</Link>
        <h1>{lang === "en" ? "Add Book" : "أضف كتاب"}</h1>
      </div>
      <input
        required
        onChange={handleChange}
        name="arTitle"
        type="text"
        value={book.arTitle}
        placeholder="Arabic Title"
      />
      <input
        required
        onChange={handleChange}
        name="enTitle"
        type="text"
        value={book.enTitle}
        placeholder="English Title"
      />
      <input
        required
        onChange={handleChange}
        name="arDescription"
        type="text"
        value={book.arDescription}
        placeholder="Arabic Description"
      />
      <input
        required
        onChange={handleChange}
        name="enDescription"
        type="text"
        value={book.enDescription}
        placeholder="English Description"
      />
      <input
        required
        onChange={handleChange}
        name="arAuthor"
        type="text"
        value={book.arAuthor}
        placeholder="Arabic Author Name"
      />
      <input
        required
        onChange={handleChange}
        name="enAuthor"
        type="text"
        value={book.enAuthor}
        placeholder="English Author Name"
      />
      <input
        required
        onChange={handleChange}
        name="numberOfPages"
        type="number"
        value={book.numberOfPages}
        placeholder="Number of Pages"
      />
      <input
        required
        onChange={handleChange}
        name="price"
        type="number"
        value={book.price}
        placeholder="Price"
      />
      <select
        required
        name="category"
        value={book.category}
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
        value={book.ageGroup}
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
          12 - 15 سنوات
        </option>
      </select>
      <label htmlFor="file-upload">
        <img
          src={`${
            book?.img ||
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

      <button>
        {" "}
        {mutation.isPending ? <span className="loader"></span> : "Add Book"}
      </button>
    </form>
  );
};

export default AddBooks;
