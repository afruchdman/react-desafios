import ItemCount from './ItemCount';
import {Card } from 'react-bootstrap';


const ItemDetail = ({ item }) => {


    return (
            <>
            <center>
            <Card style={{ width: '36rem' }}>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                {item.stock === 0 ? <p>Lo sentimos, no hay stock disponible</p> : 
                <ItemCount stock={item.stock} initial={1} onAdd={'onAdd'}/>}
            </Card.Body>
            </Card>
            </center>
            </>
    );
}

export default ItemDetail;

