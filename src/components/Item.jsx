import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Heading, Image, Stack, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({key, id, name, precio, año, imagen} ) => {
  
  return (
    <div key = {key}>

<Card maxW='sm'>
  <CardBody>
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
  <CardFooter>
    
    <ButtonGroup spacing='2'>
      <Link to={`/producto/${ id }`}>
      <Button variant='solid' colorScheme='blue'>
        Ver mas
      </Button>
      </Link>
      <Button variant='ghost' colorScheme='blue'>
        Agregar al carrito
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>






    </div>
  )
}

export default Item
