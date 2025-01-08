import React from 'react'
import Error from '../assets/Error.jpg'
import { Link } from 'react-router-dom'
export const PageNotFound = () => {
  return (
    <div className='container'>
      <img src={Error} alt=""  className='w-100' style={{maxHeight:"500px"}} />
      <p className='text-center'>
        <Link to="/" className='btn btn-success'>
        Go back to Homepage
        </Link>
      </p>
    </div>
  )
}
   