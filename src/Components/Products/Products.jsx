import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import Category from '../Category/Category'
import ProductList from '../ProductList/ProductList'
import Cards from '../Cards/Cards'
import { Link } from 'react-router-dom'
const Products = () => {
  const categories = ["All", "Fruits", "Vegetables", "Dairy", "SeaFood"]
  const [activeTab, setActiveTab] = useState('All')

  // Filter logic
  const filteredItems =
    activeTab === 'All'? ProductList : ProductList.filter(item => item.category === activeTab)

  const renderCards = filteredItems.slice(0, 8).map(product => (
    <Cards
      key={product.id}
      image={product.image}
      name={product.name}
      price={product.price}
      category={product.category}
    />
  ))

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-16">
        
        {/* Section Heading */}
        <Heading highlight="Our" Heading="Products" />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-10">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 sm:px-5 py-2 text-sm sm:text-base md:text-lg rounded-lg cursor-pointer transition-all duration-300 
              ${activeTab === category
                ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white shadow-md'
                : 'bg-zinc-100 hover:bg-zinc-200'}`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mt-14">
          {renderCards}
        </div>

        {/* View All Button */}
        <div className="mt-12 flex justify-center">
           <Link to="allproducts" className='bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg  md:text-lg text-md hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer'>
            View All
            </Link>
        </div>
      </div>
    </section>
  )
}

export default Products
