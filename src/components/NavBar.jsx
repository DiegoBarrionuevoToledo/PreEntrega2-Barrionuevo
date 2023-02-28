import React from 'react';
import CartWidget from './CartWidget';
import { Flex, Spacer, Box,Heading } from '@chakra-ui/react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
  } from '@chakra-ui/react';
import { Link } from 'react-router-dom';



const NavBar = () => {
  return (
    <div>
        <Flex className="navBar">
  <Box p='4' bg='black' >
    <Link to = "/">
      <Heading>
   <p className='Titulo'>Discos de Rap</p>
   </Heading>
   </Link>
  </Box>
  <Spacer />
  <Box p='4' bg='black'>
  <Menu>
  <MenuButton as={Button}>
    Años
  </MenuButton>
  <MenuList>
    <Link to={`/lanzamiento/${ "80s" }`}>
    <MenuItem>80s</MenuItem>
    </Link>
    <Link to={`/lanzamiento/${ "90s" }`}>
    <MenuItem>90s</MenuItem>
    </Link>
  <Link to={`/lanzamiento/${ "2000+" }`}>
    <MenuItem>2000+</MenuItem>
    </Link>
    </MenuList>
   
</Menu>
  </Box>
  <Spacer />
  <Box p='4' bg='black'>
 <Link to = {"/Cart"}>
  <CartWidget/>
  </Link>
  </Box>
</Flex>
        
        
    </div>
  )
}

export default NavBar
