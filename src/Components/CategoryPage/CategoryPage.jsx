import React from 'react'
import Baneer from '../Banner/Banner'
import ProductList from '../ProductList/ProductList'
import Cards from '../Cards/Cards'
import Banner from '../Banner/Banner'

const CategoryPage = ({title, bgimage, categories=[]}) => {

    let filteredItems = categories.includes('All')
    ? ProductList 
    : ProductList.filter(item=> categories.includes(item.category))

  // Render all products as cards
  const renderProducts = filteredItems.map((product) => (
    <Cards 
      key={product.id} 
      image={product.image} 
      name={product.name} 
      price={product.price} 
    />
  ))

  return (
    <div>
      <Banner title={title} bgimage={bgimage}/>

      {/* Product Grid */}
      <div className="max-w-[1400px] mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {renderProducts}
      </div>
    </div>
  )
}

export default CategoryPage
