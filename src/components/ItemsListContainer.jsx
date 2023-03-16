import ItemsList from './ItemsList'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const ItemsListContainer = () => {
  const { category } = useParams()
  
  const getItems = async() =>{
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    console.log(data)
    return data
  }
  const [product, setItems] = useState([])
  useEffect(() => {
    getItems().then((product) => setItems(product))
  }, [] )
  
  const categoryFilter = product.filter((item) => item.category == category)

  return (
    <> 
      {category ? <ItemsList product= {categoryFilter}/>: <ItemsList product= {product}/>}
    </>
  )
}

export default ItemsListContainer