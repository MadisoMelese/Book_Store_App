import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";
const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");
  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      const res = await fetch("http://localhost:5555/books");
      const data = await res.json();
      console.log("datas: ", data);
      setBooks(data);
      setLoading(false);
    };
    fetchBooks();
  }, []);

  return (
    <div className="p-4 mx-auto max-w-7xl">
      <div className="flex justify-center items-center gap-x-4 text-2xl">
        <button
          onClick={() => setShowType("table")}
          className="bg-sky-500 text-white  p-2 rounded-xl max-w-full min-w-[100px]"
        >
          Table
        </button>
        <button
          onClick={() => setShowType("card")}
          className="bg-sky-500 text-white p-2 hover:bg-sky-400 rounded-xl max-w-full min-w-[100px]"
        >
          Card
        </button>
      </div>
      <div className="flex justify-between items-center ">
        <h1 className="text-3xl my-8">Book List</h1>
        <Link to={"/books/create"}>
          <MdOutlineAddBox className="text-sky-800 text-4xl mr-4" />
        </Link>
      </div>
      {loading ? <Spinner /> : showType === 'table' ?(<BooksTable books={books} />): (<BooksCard books={books} />)}
    </div>
  );
};

export default Home;
