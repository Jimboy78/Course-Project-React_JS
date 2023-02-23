import React from 'react'
import CartWidget from './CartWidget'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
  } from '@chakra-ui/react'

const NavBar = () => {
  return( 
  <>
    <Breadcrumb m={2} p={3} bg='cyan'  spacing='8px'>
      <BreadcrumbItem>
        <BreadcrumbLink href='#'>Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href='#'>About</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>

    <CartWidget/>
  </>
  );
}

export default NavBar