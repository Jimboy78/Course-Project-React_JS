import React from 'react'
import { Link } from "react-router-dom";
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Image,
    Center
  } from '@chakra-ui/react'

const NavBar = () => {
  return( 
    <> 
    <Box display="flex"  background='blue.300' verticalAlign='center' justifyContent = "space-between" >
      <Link to ="/" >
        <Image
          maxH={20}
          m="1"
          src= "https://cdn-icons-png.flaticon.com/512/1966/1966273.png"
          />
      </Link>
      <Breadcrumb m={2} p={3} spacing='8px' color="white">
        <BreadcrumbItem>
          <BreadcrumbLink href='/about_us'>About</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="/catalogue/">Catalogo</BreadcrumbLink>
        </BreadcrumbItem>
        <Box>
          <Menu>
            <MenuButton
              as = {Button}
              size = 'md'
              colorScheme='blue'
              >  
              Categorias
            </MenuButton>
            <MenuList className='menu-list'>
              <Link to={`/category/${"men's clothing"}`}>
                <MenuItem color="black" justifyContent="center">Ropa de hombre</MenuItem>
              </Link>
              <Link to={`/category/${"jewelery"}`}>
                <MenuItem color="black" justifyContent="center">Joyas</MenuItem>
              </Link>
              <Link to={`/category/${"electronics"}`}>
                <MenuItem color="black" justifyContent="center">Electronica</MenuItem>
              </Link>
              <Link to={`/category/${"women's clothing"}`}>
                <MenuItem color="black" justifyContent="center">Ropa de mujer</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>
      </Breadcrumb>
      <Center>
        <Box pr={6}>
          <Breadcrumb color="white">
            <Link to ="/cart" >
              <span className="material-symbols-outlined">local_mall</span>
            </Link>
          </Breadcrumb>
        </Box>
      </Center>
    </Box>
  </>
  );
}

export default NavBar