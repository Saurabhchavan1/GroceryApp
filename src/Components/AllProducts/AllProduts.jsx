import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import Bgall from '../../assets/all-banner.jpg'

const AllProduts = () => {
  return (
    <div>
         <CategoryPage  title= "All Products" bgimage={Bgall} categories={["All"]}/>
    </div>
  )
}

export default AllProduts