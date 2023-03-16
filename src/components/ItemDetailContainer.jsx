import ItemDetail from './ItemDetail'
import React, { useState } from 'react'
import { useEffect } from 'react';


const ItemDetailContainer= () => {
  const getItems = async() =>{
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    return data
  }
  const [data, setItems] = useState([])
    useEffect(() => {
      getItems().then((item) => setItems(item))
    }, [] )
  return <>
    <ItemDetail items = {data}/>
  </>
}

export default ItemDetailContainer