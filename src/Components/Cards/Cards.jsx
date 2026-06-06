import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from '../Button/Button'

const Cards = ({ image, name, price }) => {
  return (
    <div className="bg-zinc-100 p-4 sm:p-5 md:p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 flex flex-col justify-between">
      
      {/* Card icons */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-2xl sm:text-3xl text-zinc-300 hover:text-pink-500 cursor-pointer transition">
          <FaHeart />
        </span>
        <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white text-lg sm:text-xl px-3 sm:px-4 py-2 sm:py-3 rounded-lg hover:opacity-90 transition">
          <FaPlus />
        </button>
      </div>

      {/* Card image */}
      <div className="w-full flex justify-center items-center h-40 sm:h-48 md:h-56 lg:h-60 mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Card content */}
      <div className="text-center flex flex-col items-center">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
          {name}
        </h3>
        <p className="text-lg sm:text-xl md:text-2xl font-bold text-orange-500 mt-2 mb-3">
          ${price.toFixed(2)}
        </p>
        <Button content="Shop Now" />
      </div>
    </div>
  )
}

export default Cards
