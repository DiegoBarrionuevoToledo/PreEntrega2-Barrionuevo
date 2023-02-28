import React from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,NumberInput, NumberIncrementStepper, NumberInputField, NumberDecrementStepper, NumberInputStepper, Box
} from '@chakra-ui/react'

const Cart = () => {
  return (


    <div>
      <Box className='formulario' p={10} w="300px" h="100" >
<FormControl  isRequired>
  <FormLabel>First name</FormLabel>
  <Input placeholder='First name' />
</FormControl>
<FormControl>
  <FormLabel>Email address</FormLabel>
  <Input type='email' />
  <FormHelperText>We'll never share your email.</FormHelperText>
</FormControl>
<FormControl isRequired>
  <FormLabel>Dirección</FormLabel>
  <Input placeholder='Dirección' />
</FormControl>
<FormControl>
  <FormLabel>Amount</FormLabel>
  <NumberInput max={50} min={10}>
    <NumberInputField />
    <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  </NumberInput>
</FormControl>
</Box>
    </div>



  )
}

export default Cart