//Componete con los Items del carrito
import { useContext } from "react";
import {CartContext} from "./CartContext";
import { Button } from "react-bootstrap";
import {Card } from 'react-bootstrap';

const CartShow = ({items}) => {
    const {removeItemCart} = useContext(CartContext)
    const {calctotalbyItem} = useContext(CartContext)    

    const localremoveItemCart = () =>{removeItemCart(items.id)}
    return (
<>
            <hr/><center>
            <Card style={{ width: '36rem' }}>
            <Card.Img variant="top" src={items.img} />
            <Card.Body>
                <Card.Title>Nombre: {items.name}</Card.Title>
                <Card.Title>Cantidad: {items.cantidad}</Card.Title> 
                <Card.Title>${items.price}ARS</Card.Title> 
                <Card.Title style={{ color: 'red' }}> Sub Total de {items.name}: ${calctotalbyItem(items.id)}ARS</Card.Title>
            </Card.Body>
            </Card>
            </center>
            <span><Button onClick={localremoveItemCart}>Quitar del carrito</Button></span>
</>
    );
}

export default CartShow;