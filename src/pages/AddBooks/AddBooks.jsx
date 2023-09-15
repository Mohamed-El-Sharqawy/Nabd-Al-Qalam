import { useState } from "react";
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
    numberOfPages: null,
    price: null,
    ageGroup: "اختر الفئة العمرية من فضلك",
    img: "",
  };

  const [book, setBook] = useState(defaultFormData);

  const createBook = async (newBook) => {
    const endpoint = "http://localhost:3001/add-books";

    try {
      await axios.post(endpoint, newBook);

      setBook(() => defaultFormData);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createBook(book);
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

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h1 style={{ textAlign: "center" }}>Add a Book</h1>
      <input
        onChange={handleChange}
        name="arTitle"
        type="text"
        value={book.arTitle}
        placeholder="Arabic Title"
      />
      <input
        onChange={handleChange}
        name="enTitle"
        type="text"
        value={book.enTitle}
        placeholder="English Title"
      />
      <input
        onChange={handleChange}
        name="arDescription"
        type="text"
        value={book.arDescription}
        placeholder="Arabic Description"
      />
      <input
        onChange={handleChange}
        name="enDescription"
        type="text"
        value={book.enDescription}
        placeholder="English Description"
      />
      <input
        onChange={handleChange}
        name="arAuthor"
        type="text"
        value={book.arAuthor}
        placeholder="Arabic Author Name"
      />
      <input
        onChange={handleChange}
        name="enAuthor"
        type="text"
        value={book.enAuthor}
        placeholder="English Author Name"
      />
      <input
        onChange={handleChange}
        name="numberOfPages"
        type="number"
        value={book.numberOfPages}
        placeholder="Number of Pages"
      />
      <input
        onChange={handleChange}
        name="price"
        type="number"
        value={book.price}
        placeholder="Price"
      />
      <select>
        <option dir="rtl">اختر الفئة العمرية من فضلك</option>
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
        accept=".jpeg, .png, .jpg"
        onChange={(e) => handleFileUpload(e)}
      />

      <button>Add Book</button>
    </form>
  );
};

export default AddBooks;
