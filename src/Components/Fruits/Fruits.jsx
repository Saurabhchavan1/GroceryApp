import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import Bgfruit from '../../assets/fruits-banner.jpg'

const Fruits = () => {
  return (
    <div>
       <CategoryPage  title= "Fruits & Veggies" bgimage={Bgfruit} categories={["Fruits" ,"vegetables" ]}/>
    </div>
  )
}

export default Fruits