import { useEffect, useState } from "react";
// import axios from "axios";

const AddBooks = () => {
  const [book, setBook] = useState({
    arTitle: "",
    enTitle: "",
    arDescription: "",
    enDescription: "",
    price: 20,
    img: "",
  });

  const createBook = async (newBook) => {
    try {
      console.log(newBook);
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const res = await fetch("http://localhost:3001/add-books", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(newBook),
      });

      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createBook(book);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setBook(() => ({ ...book, img: base64 }));
  };

  const handleChange = (e) => {
    setBook(() => ({ ...book, [e.target.name]: e.target.value }));
  };

  useEffect(() => {}, [book]);

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
        name="price"
        type="number"
        value={book.price}
        placeholder="Price"
      />
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

export default AddBooks;
