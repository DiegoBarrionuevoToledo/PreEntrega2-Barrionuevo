import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ItemCart from './ItemCart';
import { CartContext } from '../Context/CartContex';
import Form from './Form';

const Cart = () => {
  //const [cart, setCart] = useContext(CartContext);
  const { cart, setCart, totalPrice} = useContext(CartContext)
  console.log(cart,"cart")
  
if (cart.length === 0) {
return(
<>
<p>Agrega elementos al carrito</p>
<Link to = "/">Ir a Compras</Link>
</>
);
}





  return (
    <>
      {
         cart.map(producto => <ItemCart key={producto.id} producto= {producto}/>)
      }
      <Form totalPrice={totalPrice()} />
<p>
  total: {totalPrice()}
</p>
    </>
  )
}

export default Cart
