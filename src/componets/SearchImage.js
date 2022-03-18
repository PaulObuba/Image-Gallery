import React, { useState, useEffect } from 'react'

const SeachImage = ({ setTerm }) => {
  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setTerm(search)

    setSearch('')
  }

  return (
    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
      <form onSubmit={handleSubmit} className='w-full max-w-sm'>
        <div className='flex items-center border-b-2 border-teal-500 py-2'>
          <input
            type='text'
            className='appearance-none bg-transparent border-none 
                       w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
            placeholder='search image'
            value={search}
            onChange={handleChange}
          />
          <button
            type='submit'
            className='flex-shrink-0 bg-teal-500 hover:bg-teal-700
                     border-teal-500 hover:border-teal-700 text-sm border-4
                     text-white py-1 px-2 rounded'>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  )
}

export default SeachImage
