import {
    Box,
    Container,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { Link } from "react-router-dom";


const Footer = () =>{
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>
            <Stack direction={'row'} spacing={6}>
                <Link to ={'/'}>Home</Link>
                <Link to ={'/about_us'}>About</Link>
                <Link to ={'/catalogue'}>Catalogo</Link>
            </Stack>
            <Text>Proyecto Curso React CoderHouse</Text>
            </Container>
        </Box>
      );
    };
    
    export default Footer