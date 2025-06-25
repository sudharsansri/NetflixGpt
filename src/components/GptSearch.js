import React from 'react'
import { GptMovies } from './GptMovies'
import { GptSearchBar } from './GptSearchBar'

export const GptSearch = () => {
  return (
    <div>
        <div>
            <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_medium.jpg"
        alt="background"
        className="absolute h-full w-full object-cover -z-10"
      />
        </div>
       
         <GptSearchBar />
         <GptMovies/>
    </div>
  )
}
