import React, { useState } from 'react'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'

const CreateBook = () => {
  const {enqueueSnackbar} = useSnackbar()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishedYear, setPublishedYear] = useState('')
  const [price, setPrice] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('http://localhost:5555/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({title, author, publishedYear, price})
      })
      const data = await res.json()
      if(!res.ok){
        throw new Error(data.message)
      }
      setLoading(false)

      enqueueSnackbar('Book created successfully', {variant: 'success'})
      
      navigate('/')
    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  }
  return (
    <div className='p-8'>
      <BackButton />
      <h1 className='text-2xl font-bold my-8'>Create Book</h1>
      {loading && <Spinner />}
      {error && <p className='text-red-500'>{error}</p>}
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label htmlFor='title' className='block'>Title</label>
          <input type='text' id='title' value={title} onChange={(e) => setTitle(e.target.value)} className='w-full border p-2' />
        </div>
        <div>
          <label htmlFor='author' className='block'>Author</label>
          <input type='text' id='author' value={author} onChange={(e) => setAuthor(e.target.value)} className='w-full border p-2' />
        </div>
        <div>
          <label htmlFor='publishedYear' className='block'>Published Year</label>
          <input type='text' id='publishedYear' value={publishedYear} onChange={(e) => setPublishedYear(e.target.value)} className='w-full border p-2' />
        </div>
        <div>
          <label htmlFor='price' className='block'>Price</label>
          <input type='text' id='price' value={price} onChange={(e) => setPrice(e.target.value)} className='w-full border p-2' />
        </div>
        <button type='submit' className='bg-blue-500 text-white p-2'>Create Book</button>
      </form>
    </div>
  )
}

export default CreateBook