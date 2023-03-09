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
  } from '@chakra-ui/react'

const NavBar = () => {
  return( 
    <> 
    <Box display="flex"  background='blue.300' verticalAlign='center' justifyContent = "center" >
      <Breadcrumb m={2} p={3} spacing='8px' color="white">
        <BreadcrumbItem >
          <BreadcrumbLink href='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>
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
              <Link to={`/category/${"1"}`}>
                <MenuItem color="black" justifyContent="center">1</MenuItem>
              </Link>
              <Link to={`/category/${"2"}`}>
                <MenuItem color="black" justifyContent="center">2</MenuItem>
              </Link>
              <Link to={`/category/${"3"}`}>
                <MenuItem color="black" justifyContent="center">3</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>
        <Box>
          <Link to href ="/cart" >
            <span className="material-symbols-outlined">local_mall</span>
          </Link>
        </Box>
      </Breadcrumb>
    </Box>
  </>
  );
}

export default NavBar