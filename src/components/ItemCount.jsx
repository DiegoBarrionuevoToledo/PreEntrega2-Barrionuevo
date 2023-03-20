import { Button } from '@chakra-ui/react';
import React from 'react'
import { useState, useEffect } from 'react'
import ItemListContainer from './ItemListContainer';

const ItemCount = ({initial, stock, onAdd}) => {
const [counter, setCounter] = useState(parseInt(initial));

useEffect(() => {
    // setCounter(parseInt(initial));
// console.log("counter", counter)
// console.log("llamada a una api");
}, [counter]);

const sumar = () => {
    setCounter(counter + 1 );
}
const restar = () =>{
    setCounter(counter - 1 );
}



  return (
    <div class="counter">
         <Button variant='solid' colorScheme='blue' isDisabled={counter <=1} onClick={restar} > - </Button>
        <span class="counterLabel">{counter}</span>
        <Button variant='solid' colorScheme='blue' isDisabled={counter >= stock } onClick={sumar}>+</Button>
        <div>
         <Button variant='solid' colorScheme='blue' isDisabled={stock <= 0} onClick={()=> onAdd(counter) } >Agregar al carrito</Button>
        </div>
        
        
    </div>
  )
}

export default ItemCount