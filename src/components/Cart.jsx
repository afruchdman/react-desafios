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
        } = useContext(CartContext)
    
const localClearCart=()=>{clearCart()}
    return (
        <>
            <h2 className="h4">Subtotal: {calcsubtotal()}</h2>
            <h2 className="h4">Impuestos: {calcimpuestos()}</h2>
            <h2 className="h2" style={{ color: 'red' }}>TOTAL: {calcTotalFinal()}</h2>
            <p><Button onClick={localClearCart}>Limpiar Carrito</Button></p>
            <CartItem Item={cartList}></CartItem>
            <br/>

                       
                
            
        </>
    );
}

export default Cart;