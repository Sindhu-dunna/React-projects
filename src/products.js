import React from 'react'
import { Link } from 'react-router-dom';
import ProductsData from'./ProductsData';

function Products (){
  return (
    <div>
      {
        ProductsData.map((eachuser)=>{
            const{name,price,imageURL,id}=eachuser
            return <Link to ={`/Products/${id}`}key={id}>
                <div>
                    <img src ={imageURL} alt=""/>
                    <h3>Name: {name}</h3>
                    <h3>Price:{price}</h3>
                </div>
            </Link>
        })
      }
    </div>
  )
}

export default Products;
