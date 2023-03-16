import { Image, Box, Center } from '@chakra-ui/react'
import React from 'react'

const ItemListContainer = () => {
  return (
    <> 
      <Center>
        <Box boxSize='2xl' mt="10">
          <Image 
          textAlign="center"
          src="https://www.pngplay.com/wp-content/uploads/6/E-Commerce-Logo-PNG-Clipart-Background.png"/>
        </Box>
      </Center>
    </>
  )
}

export default ItemListContainer