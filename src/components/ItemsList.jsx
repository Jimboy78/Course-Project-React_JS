import Item from './Item'
import { Container } from '@chakra-ui/react'


const ItemsList= ({items}) => {
  return (
        <>
        <Container>   
            {items?.map((items)=>(
                <Item
                    key={items.key}
                    id={items.id}
                    name={items.name}
                    price={items.price}
                    category={items.category}
                    image={items.image}
                />
            ))}    
        </Container>
    </>
  )
}

export default ItemsList