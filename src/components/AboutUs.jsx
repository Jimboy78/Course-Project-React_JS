import React from 'react'
import { Text, Box, Center } from '@chakra-ui/react'

const AboutUs = () => {

        return (
          <>
          <Center>
            <Box maxW="800" background="cyan.100" p="5" m="10" borderRadius="3xl" boxShadow="dark-lg">
              <Text fontSize="7xl" color="cyan.600">
                About Us
              </Text>
              <Text fontSize="2xl" mb='8px' c>
                  Lorem ipsum, dolor sit amet 
                consectetur adipisicing elit. Alias, deleniti quos dolorum
                soluta quis hic et? Sit rerum, ab aut nulla error dolor 
                mollitia incidunt vitae quisquam minus voluptate iure?
                Lorem ipsum dolor.
               </Text>
              <Text fontSize="2xl" mb='8px'>
                  Lorem ipsum, dolor sit amet 
                consectetur adipisicing elit. Alias, deleniti quos dolorum
                soluta quis hic et? Sit rerum, ab aut nulla error dolor 
                mollitia incidunt vitae quisquam minus voluptate iure?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Voluptate expedita molestias nesciunt soluta officia voluptas 
                quibusdam ex nemo quis tempore debitis mollitia id labore vitae 
                cupiditate, nisi perferendis reprehenderit culpa.
               </Text>
            </Box>
          </Center>
          </>
        )
      
}

export default AboutUs