import React, { useState } from 'react'

const Search = ({onsearch}) => {
    const [city, setCity] = useState('')
    const handleClick = () => {
        onsearch(city)
    }
    const handleChange = (e) => {
        setCity(e.target.value)

    }
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        handleClick()
      }
    }
  return (
    <>
     <div className='w-full max-w-md p-10 bg-[#00246B] shadow-lg rounded-lg'>
            <div className='h-full w-full flex flex-col items-center'>
                <input 
                    type="text" 
                    className='w-full p-2 mb-4 bg-[#408EC6] text-white placeholder-gray-200 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                    value={city}
                    onChange={handleChange}
                    placeholder='Enter City Name'
                    onKeyDown={handleKeyPress}
                />
                <button 
                    className='w-full py-2 mt-2 bg-[#408EC6] text-white rounded-md hover:bg-[#F1F1F2] hover:text-white transition duration-300 ease-in-out'
                    onClick={handleClick}
                >
                    Search
                </button>
            </div>
        </div>
    </>
  )
}

export default Search
