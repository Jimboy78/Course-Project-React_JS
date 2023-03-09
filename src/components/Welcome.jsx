import { Image, Box, Center } from '@chakra-ui/react'
import React from 'react'

const ItemListContainer = () => {
  return (
    <> 
      <Center>
        <Box boxSize='2xl' mt="10">
          <Image 
          textAlign="center"
          src="https://www.9minecraft.net/wp-content/uploads/2022/06/Random-Item-Giver-Data-Pack-Thumbnail.png"/>
        </Box>
      </Center>
    </>
  )
}

export default ItemListContainer