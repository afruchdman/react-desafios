import {useContext} from "react";
import {CartContext} from "./CartContext";
import CartItem from "./CartItem";
import { Button } from "react-bootstrap";

 const Cart = () => {
    const {cartList,clearCart} = useContext(CartContext)
    const localClearCart=()=>{clearCart()}
    return (
        <>
            <h1>This is your cart!</h1>
            <span><Button onClick={localClearCart}>Limpiar Carrito</Button></span>
            <CartItem Item={cartList}></CartItem>
        </>
    );
}

export default Cart;