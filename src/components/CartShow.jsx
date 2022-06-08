//Componete con los Items del carrito
import { useContext } from "react";
import {CartContext} from "./CartContext";
import { Button } from "react-bootstrap";
import {Card } from 'react-bootstrap';

const CartShow = ({items}) => {
    const {removeItemCart} = useContext(CartContext)

    const localremoveItemCart = () =>{removeItemCart(items.id)}
    return (
<>
            <center>
            <Card style={{ width: '36rem' }}>
            <Card.Img variant="top" src={items.img} />
            <Card.Body>
                <Card.Title>{items.name}</Card.Title>
                <Card.Title>{items.cantidad}</Card.Title> 
            </Card.Body>
            </Card>
            </center>
                <span><Button onClick={localremoveItemCart}>Quitar del carrito</Button></span>
            </>
    );
}

export default CartShow;