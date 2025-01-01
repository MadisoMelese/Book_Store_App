import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateBook from './pages/CreateBook'
import Home from './pages/Home'
import EditBook from './pages/EditBook'
import DeleteBook from './pages/DeleteBook'
import ShowBook from './pages/ShowBook'

const App = () => {
  return (
    <Routes>
      <Route path='' element={<Home />}/>
      <Route path='/books/edit/:id' element={<EditBook />}/>
      <Route path='/books/create' element={<CreateBook />}/>
      <Route path='/books/show/:id' element={<ShowBook />}/>
      <Route path='/books/delete/:id' element={<DeleteBook />}/>
    </Routes>
  )
}

export default App