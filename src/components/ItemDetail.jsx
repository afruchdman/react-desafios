import ItemCount from './ItemCount';
import {Card } from 'react-bootstrap';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";




const ItemDetail = ({ item }) => {

    const [itemCount,setItemCount]=useState(0)
    const [contador, setContador] = useState(0);

    const onAdd =(qty)=>{
        //console.log("valor de qty="+qty);
        alert("valor de qty="+qty);
        setItemCount(qty);
    }

    return (
            <>
            <center>
            <Card style={{ width: '36rem' }}>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                {
                item.stock === 0 ? <p>Lo sentimos, no hay stock disponible</p> : 
                itemCount===0
                ?<ItemCount stock={item.stock} contador={contador} setContador={setContador} onAdd={onAdd}/>
                :<>
                    <Link to='/cart'><Button variant="success" size="lg">Ir al Carrito!</Button></Link>
                    <Link to='/'><Button variant="info" size="lg">Seguir comprando</Button></Link>
                </>}
            </Card.Body>
            </Card>
            </center>
            </>
    );
}

export default ItemDetail;

