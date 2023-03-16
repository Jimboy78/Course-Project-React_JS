import Item from './Item'
import { Container } from '@chakra-ui/react'


const ItemsList= ({product}) => {
  return (
        <>
        <Container>   
            {product?.map((product)=>(
                <Item
                    key= {product.id}
                    id= {product.id}
                    title= {product.title}
                    price= {product.price}
                    description= {product.description}
                    image= {product.image}
                    category= {product.category}
                />
            ))}    
        </Container>
    </>
  )
}

export default ItemsList