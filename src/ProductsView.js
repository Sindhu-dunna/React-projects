import React from 'react'
import { useParams } from 'react-router-dom';
import ProductsData from './ProductsData';

const Productsview = () => {
    const parms=useParams();
    const filterProducts=ProductsData.find((eachUser)=>parms.id == eachUser.id)
    console.log(filterProducts)
  return (
    <>
    <div> ProductsView </div>
    <div>
        <h1>{filterProducts.name}</h1>
        <img src={filterProducts.imageURL}alt=""/>
        <h3>{filterProducts.id}</h3>
    </div>
    </>
  )
}

export default Productsview;
