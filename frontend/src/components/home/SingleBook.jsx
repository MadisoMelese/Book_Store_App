import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
import { PiBookOpenTextFill } from "react-icons/pi";
import BooksModal from "./BooksModal";

const SingleBook = ({ book }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div
      className="border-2 h-48 border-gray-500 rounded-lg px-4 m-2 relative hover:shadow-xl"
      key={book._id}
    >
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
        {book.publishedYear}
      </h2>
      <h4 className="my-2 text-gray-500">
        {" "}
        <span className="text-black">ID:</span> {book._id}
      </h4>
      <div className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextFill className="text-red-300 text-2xl" />
        <h2 className="my-1">{book.title}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-blue-300 text-2xl" />
        <h2 className="my-1">{book.author}</h2>
      </div>
      <div className="flex justify-between items-center gap-x-2 p-4">
        <BiShow
          className="text-3xl cursor-pointer text-blue-800 hover:text-black"
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit
            className="text-green-600 hover:text-green-300 text-2xl"
            title="Edit"
          />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete
            className="text-red-500 hover:text-slate-700 text-2xl"
            title="Delete"
          />
        </Link>
        <Link to={`/books/show/${book._id}`}>
          <BsInfoCircle
            className="text-blue-700 hover:text-blue-500 text-2xl"
            title="Details"
          />
        </Link>
      </div>
      {showModal && <BooksModal book={book} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default SingleBook;
