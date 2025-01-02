import React, { useEffect, useState } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { useParams } from 'react-router-dom'
const ShowBook = () => {
  const { id } = useParams()
  const [book, setBook] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBook = async () => {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(`http://localhost:5555/books/${id}`)
        const data = await res.json()
        if (res.ok) {
          setBook(data.data)
        } else {
          setError(data.message)
        }
      } catch (error) {
        setError('Internal Server Error')
      }
      setLoading(false)
    }
    fetchBook()
  }, [id])
    
  return (
    <div className='p-4'>
    <BackButton />
    <h1 className='text-3xl my-4'>Show Book</h1>
    {loading ? (
      <Spinner />
    ) : (
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Id</span>
          <span>{book._id}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Title</span>
          <span>{book.title}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Author</span>
          <span>{book.author}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Publish Year</span>
          <span>{book.publishedYear}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Price</span>
          <span>${book.price}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Create Time</span>
          <span>{new Date(book.createdAt).toString()}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
          <span>{new Date(book.updatedAt).toString()}</span>
        </div>
      </div>
    )}
  </div>
  )
}

export default ShowBook