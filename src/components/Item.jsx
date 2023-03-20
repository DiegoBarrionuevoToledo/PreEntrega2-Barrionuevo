import React, { useContext } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Heading, Image, Stack, Text, Divider, ButtonGroup, Button, Center, Container, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'



const Item = ({key, id, name, precio, año, imagen,stock} ) => {

 
 return (
   

    <div  key = {key}>
 <Container>
<Card maxW='sm' h="600px">
  <CardBody >
    <Image
      src={imagen}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'> {name} </Heading>
  
      <Text color='blue.600' fontSize='2xl'>
        ${precio}
      </Text>
     
      
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter className='cardFooter'>
    
    <ButtonGroup spacing='2'>
      <Link to={`/producto/${ id }`}>
      <Button variant='solid' colorScheme='blue'>
        Detalles
      </Button>
      </Link>
     
    </ButtonGroup>
  </CardFooter>
</Card>
</Container>







    </div>
  )
}

export default Item
