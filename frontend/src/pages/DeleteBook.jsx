import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { useSnackbar } from "notistack";  
const DeleteBook = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handlDelete = async () => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5555/books/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("Failed to delete book");
      }
      enqueueSnackbar("Book deleted successfully", { variant: "success" });
      navigate("/");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <BackButton />
      <h1 className="text-2xl font-bold my-8">Delete Book</h1>
      {loading && <Spinner />}
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] mx-auto p-8">
        <h3 className="text-2xl">are you sure you want delete this book?</h3>
        <div className="flex justify-around w-full text-2xl gap-6">
          <button
            onClick={handlDelete}
            className="bg-red-500 text-white rounded-xl text-2xl p-2 mt-4 w-full"
          >
            Yes, Delete it
          </button>
          <button
            onClick={() => navigate("/")}
            className=" w-full bg-green-500 rounded-xl text-white p-2 mt-4"
          >
            No, Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBook;
