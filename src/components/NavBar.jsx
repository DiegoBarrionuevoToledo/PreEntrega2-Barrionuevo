import React from 'react';
import CartWidget from './CartWidget';
import { Flex, Spacer, Box } from '@chakra-ui/react';
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
        <Flex>
  <Box p='4' bg='green.400'>
    <Link to = "/">
   Discos de Rap
   </Link>
  </Box>
  <Spacer />
  <Box p='4' bg='green.400'>
  <Menu>
  <MenuButton as={Button}>
    Años
  </MenuButton>
  <MenuList>
    <MenuItem>80s</MenuItem>
    <MenuItem>90s</MenuItem>
    <MenuItem>2000/+</MenuItem>
    </MenuList>
</Menu>
  </Box>
  <Spacer />
  <Box p='4' bg='green.400'>
  <CartWidget/>
  </Box>
</Flex>
        
        
    </div>
  )
}

export default NavBar
