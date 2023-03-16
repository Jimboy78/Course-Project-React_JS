import React from 'react'
import {} from '@chakra-ui/react'
import { Card, CardBody, Heading, Stack, Divider, CardFooter, ButtonGroup, Button, Image, Text, Center, Box } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

const ItemDetail = ({ items }) => {
    const{ id } = useParams()
    const getItems = async() =>{
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        return data
      }
    const [data, setItems] = useState([])

    useEffect(() => {
        getItems().then((data) => setItems(data))
        }, [] 
    )

    const itemFilter = items.filter((item) => item.id == id)
    console.log(itemFilter)
    console.log(items)
    console.log(id)

    console.log()
    return (
        <>
        {itemFilter.map((item)=>
        <div key={item.id}>
            <Center>
                <Card maxW='md' m="5">
                    <CardBody>
                        <Image
                        src={item.image}
                        alt='item'
                        borderRadius='sm'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{item.title}</Heading>
                            <Text>{item.description}</Text>
                            <Text fontSize='2xl'>Categoria: {item.category}</Text>
                            <Text >Rate: {item.rating.rate}</Text>
                            <Text color='blue.600' fontSize='2xl'>Price: ${item.price}</Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <Center>
                        <CardFooter>
                            <Button spacing='2'variant='ghost' colorScheme='blue'>Add to cart</Button>
                        </CardFooter>
                    </Center>
                </Card>
            </Center>
        </div>
        )}
        </>
    )
    }

export default ItemDetail