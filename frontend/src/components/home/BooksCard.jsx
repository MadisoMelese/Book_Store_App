
import SingleBook from "./SingleBook";

const BooksCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3" >
      {books.map((item) => (
        <SingleBook book={item} key={item._id}/>
      ))}
    </div>
  );
};

export default BooksCard;
