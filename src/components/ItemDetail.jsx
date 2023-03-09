import React from 'react'
import {} from '@chakra-ui/react'
import { Card, CardBody, Heading, Stack, Divider, CardFooter, ButtonGroup, Button, Image, Text } from '@chakra-ui/react'

const ItemDetail = ({id, name, price, category, image}) => {
    return (
        <>
                    <Card maxW='sm' m="5">
            <CardBody>
                <Image
                src={image}
                alt='item'
                borderRadius='sm'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{name}</Heading>
                    <Text>
                        Categoria: {category}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        Price: ${price}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='ghost' colorScheme='blue'>
                        Add to cart
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
        </>
    )
    }

export default ItemDetail