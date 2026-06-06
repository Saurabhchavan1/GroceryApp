import React from 'react'
import Button from '../Button/Button'
import FreshFruits from '../../assets/fresh-fruits.png'

const Discount = () => {
  return (
    <section
      className="bg-zinc-100 bg-no-repeat bg-right bg-contain"
      style={{ backgroundImage: `url(${FreshFruits})` }}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 py-10 md:py-16 lg:py-20 gap-6 md:gap-10">
        
        {/* Discount Percentage */}
        <span className="text-6xl sm:text-8xl md:text-9xl text-orange-500 font-bold transform md:-rotate-90 order-2 md:order-1">
          20%
        </span>

        {/* Text Content */}
        <div className="max-w-[700px] text-center md:text-left order-1 md:order-2">
          <h3 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-zinc-800 font-bold leading-tight">
            First Order Discount
          </h3>
          <p className="text-zinc-600 mt-4 mb-6 text-base sm:text-lg md:text-xl">
            Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchase. Fast delivery and quality guaranteed.
          </p>
          <Button content="Get A Discount" />
        </div>
      </div>
    </section>
  )
}

export default Discount
