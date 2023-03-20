import React from 'react'
import { collection, getFirestore, addDoc, } from 'firebase/firestore'
import { useState, useContext } from 'react'
import { CartContext } from '../Context/CartContex';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,Box, Input, Button
  } from '@chakra-ui/react'


const Form = (totalPrice) => {
  const [orderId, setOrderId]  = useState(null);
  const [name, setName]  = useState("");
  const [email, setEmail]  = useState("");
  const [address, setAddress]  = useState("");
  const {cart} = useContext(CartContext)
  const order ={
    name,
    email,
    address,
    cart,
    totalPrice,

  };



  const db = getFirestore();
 const ordersCollection = collection(db, "orden");
  const handleSubmit = (e) => {
   e.preventDefault();
   addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
}




  return (
    <>
    <form onSubmit={handleSubmit} >
    <Box className='formulario' p={10} w="300px" h="100" >
        
<FormControl  isRequired>
<FormLabel>First name</FormLabel>
<Input onChange={(e)=>setName(e.target.value)} placeholder='First name' />
</FormControl>
<FormControl>
<FormLabel>Email address</FormLabel>
<Input onChange={(e)=>setEmail(e.target.value)} type='email' />
<FormHelperText>We'll never share your email.</FormHelperText>
</FormControl>
<FormControl isRequired>
<FormLabel>Dirección</FormLabel>
<Input onChange={(e)=>setAddress(e.target.value)} placeholder='Dirección' />
</FormControl>
<Button type='submit' >pagar</Button>
</Box>
  </form>
  <p>Id de la orden:{orderId} </p>
  </>
  )
}

export default Form