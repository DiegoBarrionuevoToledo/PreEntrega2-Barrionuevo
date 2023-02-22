import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter, Heading, Image, Stack, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react';


const ItemDetail = ({productos}) => {
    const {id} = useParams()
  
  const idFilter = productos.filter((producto) =>
  producto.id == id
);

 return (
  <>
  {idFilter.map((element)=>{
  return (<div key= {element.id}>

    <Card maxW='sm'>
      <CardBody>
        <Image
          src={element.imagen}
          alt='Green double couch with wooden legs'
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'> {element.name} </Heading>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design with a
            sprinkle of vintage design.
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            ${element.precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        

      </CardFooter>
    </Card>
    
    
    
    
    
    
        </div>) })}

  </>
   
  )
}

export default ItemDetail
