import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';
import { useSnackbar } from 'notistack';
const EditBook = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedYear, setPublishedYear] = useState('');
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBook = async () => {
      setLoading(true);
      try {
        const res = await fetch(`http://localhost:5555/books/${id}`);
        if (!res.ok) {
          throw new Error('Failed to fetch book details');
        }
        const data = await res.json();
        setTitle(data.title);
        setAuthor(data.author);
        setPublishedYear(data.publishedYear);
        setPrice(data.price);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5555/books/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, author, publishedYear, price }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message);
      }
      setLoading(false);
      enqueueSnackbar('Book updated successfully', { variant: 'success' });
      navigate('/');

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-2xl font-bold my-8'>Update Book</h1>
      {loading && <Spinner />}
      {error && <p className='text-red-500'>{error}</p>}
      <form onSubmit={handleSubmit} className='space-y-4 '>
        <div className='my-4'>
          <label htmlFor='title' className='text-xl mr-4 text-gray-500'>Title</label>
          <input
            type='text'
            id='title'
            value={title || ''}
            onChange={(e) => setTitle(e.target.value)}
            className='w-full border-gray-500 py-2 px-4 border-2'
          />
        </div>

        <div className='my-4'>
          <label htmlFor='title' className='text-xl mr-4 text-gray-500'>Author</label>
          <input
            type='text'
            id='author'
            value={author || ''}
            onChange={(e) => setAuthor(e.target.value)}
            className='w-full border-gray-500 py-2 px-4 border-2'
          />
        </div>

        <div className='my-4'>
          <label htmlFor='publishedYear' className='text-xl mr-4 text-gray-500'>Published Year</label>
          <input
            type='text'
            id='publishedYear'
            value={publishedYear || ''}
            onChange={(e) => setPublishedYear(e.target.value)}
            className='w-full border-gray-500 py-2 px-4 border-2'
          />
        </div>
        <div className='my-4'>
          <label htmlFor='price' className='text-xl mr-4 text-gray-500'>Price</label>
          <input
            type='text'
            id='price'
            value={price || ''}
            onChange={(e) => setPrice(e.target.value)}
            className='w-full border-gray-500 py-2 px-4 border-2'
          />
        </div>
        <button type='submit' className='bg-sky-500 text-white p-2'>Save change</button>
      </form>
    </div>
  );
};

export default EditBook;
