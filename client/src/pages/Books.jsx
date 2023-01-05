import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBooks();
  }, []);

  return <div>Books</div>;
};

export default Books;
