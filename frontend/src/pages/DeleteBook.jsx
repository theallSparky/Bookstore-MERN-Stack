import React, { useState } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const DeleteBook = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()
  const handleDeleteBook = () => {
    setLoading(true)
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false)
        navigate('/')
        .catch((error) => {
          setLoading(false)
          alert('An error occurred! Please check the console!')
          console.log(error)
        })
      })
  }
  return (
    <div className='p-4'>
      <BackButton />
    </div>
  )
}

export default DeleteBook