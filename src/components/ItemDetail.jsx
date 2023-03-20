import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter, Heading, Image, Stack, Text, Divider, ButtonGroup, Button, Center, Flex, SimpleGrid, Container,Box } from '@chakra-ui/react';
import ItemCount from './ItemCount';
import { useState } from 'react';
import { CartContext } from '../Context/CartContex';
 


 export const ItemDetail = ({productos}) => {

    const [goToCart, setGoToCart] = useState(false);
    const {idParams} = useParams();
    const {addProduct} = useContext(CartContext);
  const idFilter = productos.filter((producto) =>
  producto.id == idParams
);





 return (
  <>

  {idFilter.map((element)=>{
    const onAdd = (quantity) => {
      setGoToCart(true)
      addProduct(element, quantity)
     }

  return (<div key= {element.id}>


<div>

<Container> 
  <Flex alignItems="center">
    <Card maxW='sm' >
      <CardBody>
        
        <Image
          src={element.imagen}
          alt='Green double couch with wooden legs'
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'> {element.nombre} </Heading>
          <Text>
            {element.descripcion}
          </Text>
          <Text color='blue.600' fontSize='2xl' textAlign="center" textDecoration="solid">
        Año:{element.año}
       </Text>
          <Text color='blue.600' fontSize='2xl' textAlign="center">
        <h1>Stock:{element.stock}</h1>
      </Text>
          <Text color='blue.600' fontSize='2xl' textAlign="center">
            Precio: ${element.precio}
          </Text>
       
        </Stack>
        
      </CardBody>
      <Divider />
      <CardFooter className='cardFooter'> 
       
    
    

        {
          goToCart
          ? <div><Link to = '/cart'><Button variant='solid' colorScheme='blue'> Terminar compra</Button></Link><Link to = '/'><Button variant='solid' colorScheme='blue'> Seguir Comprando</Button></Link></div>  :
          <ItemCount initial={1} stock={10} onAdd={onAdd} />
        
        }
  
        
    
   
    
      </CardFooter>
    </Card>
    </Flex>
    </Container>
    
    
    
    
    </div>
        </div>) })}
        
  </>
   
  )
}

export default ItemDetail
