import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import items from '../items.json';

const ItemDetailContainer= ({items}) => {
    const { id } = useParams()
    console.log(id)


  return <>
    <h1>Item {id}</h1>
    <ItemDetail items= {items}/>
  </>
}

export default ItemDetailContainer