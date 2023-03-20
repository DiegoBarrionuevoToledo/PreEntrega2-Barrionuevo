import  {useState, createContext} from 'react'

export const CartContext = createContext(null);




const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addProduct = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(cart.map(producto => {
                return producto.id === item.id ? {
                    ...producto, quantity: producto.quantity + quantity} : producto 
            }));
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };
    
    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;
    
    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));
    
    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0)
    }
    
    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);
    






  return (
    <CartContext.Provider value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProducts,
        cart,
        setCart,

    }} >
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider