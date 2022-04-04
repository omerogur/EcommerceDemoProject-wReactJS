import React, { useContext } from 'react'
import cartContext from '../context/CartContex';

const HomePage = () => {
    const {categories} = useContext(cartContext)
    console.log(categories);
  return (
    <div>HomePage</div>
  )
}

export default HomePage