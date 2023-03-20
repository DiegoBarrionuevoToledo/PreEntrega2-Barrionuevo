import React, {useContext} from 'react'
import { CartContext } from '../Context/CartContex'

const ItemCart = ({ producto }) => {
const {removeProduct} = useContext(CartContext);

  return (
    <div className='itemCart'>
      <img src={producto.imagen} alt={producto.nombre} />
        <div>
            <p>Nombre: {producto.nombre} </p>
            <p>Cantidad: {producto.quantity} </p>
            <p>Precio: {producto.precio} </p>
            <p>SubTotal: $ {producto.quantity * producto.precio} </p>
              <button onClick={ ()=> removeProduct(producto.id)} >Eliminar</button>
        </div>

</div>
  )
}

export default ItemCart