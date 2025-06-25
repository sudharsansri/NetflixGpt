import React from 'react'
import { lang } from '../utlis/language'
import { useSelector } from 'react-redux'

export const GptSearchBar = () => {
     const selectedLanguage=useSelector((state) => state?.user?.languages);
  return (
    <div>
        <form className="flex items-center justify-center mt-4 pt-40">
          <input  type='text' className='w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Search for movies...' />
          <button type='submit' className='ml-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-blue-700 transition duration-200'>
            {lang[selectedLanguage].search}  </button>
        </form>
    </div>
  )
}
