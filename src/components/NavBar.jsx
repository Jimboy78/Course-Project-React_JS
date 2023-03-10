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
          src= "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/657be565-f4b2-4e47-841f-1b0711b0205b/d72kffl-364e6d5e-4703-425a-8ceb-6a82ff1fab77.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY1N2JlNTY1LWY0YjItNGU0Ny04NDFmLTFiMDcxMWIwMjA1YlwvZDcya2ZmbC0zNjRlNmQ1ZS00NzAzLTQyNWEtOGNlYi02YTgyZmYxZmFiNzcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.vbeGbNHy-DxfE0-53D-QJc5Xq4XBC3NNeRPlsCxgGFg"
          />
      </Link>
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