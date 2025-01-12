import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'
const BooksTable = ({books}) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
    <thead >
      <tr>
        <th className='border border-slate-600 rounded-md'>No</th>
        <th className='border border-slate-600 rounded-md'>Title</th>
        <th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>
        <th className='border border-slate-600 rounded-md max-md:hidden'>Publish Year</th>
        <th className='border border-slate-600 rounded-md max-md:hidden'>Price</th>
        <th className='border border-slate-600 rounded-md '>Operations</th>
      </tr>
    </thead>
    <tbody>
      {books.map((book, index) => (
        <tr key={book._id} className='h-8'>
          <td className='border border-slate-700 rounded-md text-center'>{index + 1}</td>
          <td className='text-xl border border-slate-600 rounded-md text-center'>{book.title}</td>
          <td className='text-xl border border-slate-700 rounded-md max-md:hidden text-center'>{book.author}</td>
          <td className='border border-slate-700 rounded-md max-md:hidden text-center text-xl'>{book.publishedYear}</td>
          <td className='border border-slate-700 text-center rounded-md max-md:hidden text-xl'>${book.price}</td>
          <td className='border border-slate-700 rounded-md '>
            <div className="flex justify-around gap-x-4 ">
              <Link to={`/books/edit/${book._id}`}>
                <AiOutlineEdit  className='text-sky-800 text-4xl'/>
              </Link>
              <Link to={`/books/delete/${book._id}`}>
                <MdOutlineDelete  className='text-red-500 text-4xl'/>
              </Link>
            <Link to={`/books/show/${book._id}`}>
              <BsInfoCircle  className='text-sky-800 text-3xl'/>
            </Link>
            </div>
          </td>
        </tr>))}
    </tbody>
  </table>
  )
}

export default BooksTable