import {useContext} from "react";
import {CartContext} from "./CartContext";
import CartItem from "./CartItem";
import { Button } from "react-bootstrap";

 const Cart = () => {
    const {cartList,
        clearCart,
        calcsubtotal,
        calcimpuestos,
        calcTotalFinal,
        contadorItems
        } = useContext(CartContext)
    
const localClearCart=()=>{clearCart()}

    return (          
        contadorItems()===0 ?<p className="h2" style={{ color: 'red' }}>Tu carrito esta vacio</p>: 
            <>
            <h2 className="h4">Subtotal: {calcsubtotal()}</h2>
            <h2 className="h4">Impuestos: {calcimpuestos()}</h2>
            <h2 className="h2" style={{ color: 'red' }}>TOTAL: {calcTotalFinal()}</h2>
            <p><Button onClick={localClearCart}>Limpiar Carrito</Button></p>
            <CartItem Item={cartList}></CartItem></>
            
    );
}

export default Cart;