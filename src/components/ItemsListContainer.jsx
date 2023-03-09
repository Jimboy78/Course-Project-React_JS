import React from 'react'
import ItemsList from './ItemsList'
import { useParams } from 'react-router-dom';
import items from '../items.json';

const ItemsListContainer = () => {
  const { category } = useParams()
  const categoryFilter = items.filter((item) => item.category === category)
  console.log(category)

  return (
    <> 
      {category ? <ItemsList items= {categoryFilter}/>: <ItemsList items= {items}/>}
    </>
  )
}

export default ItemsListContainer