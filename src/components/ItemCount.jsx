//Este componente tiene los botones para agregar o quitar el producto a la compra
import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';

const ItemCount = ( {stock = 0, contador ,  setContador , onAdd}) => {
  //    const [contador, setcontador] = useState(0);

    //funcion para incrementar contador
    const sumarproducto =()=>{contador<stock && setContador(contador+1)}
    //funcion para decrementar contador
    const restarproducto =()=>{contador>0&&setContador(contador-1)}
    //Esto esta a la espera de la clase para agregar el producto al carrito general de la pagina.
    //onAdd = (cantidad)=>{console.log(cantidad);}

    return (
      <>
        <ButtonGroup size="sm">
            {stock===0&&<Button disabled variant="outline-primary" size="sm" onClick={sumarproducto}>+</Button>}
            {stock!==0&&<Button variant="outline-primary" size="sm" onClick={sumarproducto}>+</Button>}
            {stock===0?<span color='red bold'>&nbsp;sin stock&nbsp;</span>:<span>&nbsp;{contador}&nbsp;</span>}        
            {stock===0&&<Button disabled variant="outline-primary" size="sm" onClick={restarproducto}>-</Button>}
            {stock!==0&&<Button variant="outline-primary" size="sm" onClick={restarproducto}>-</Button>}
        </ButtonGroup>
        <ButtonGroup size="sm">
            <Button variant="outline-primary" size="lg" onClick={() => onAdd(contador)}>Agregar al carrito</Button>
        </ButtonGroup>
      </>    
    );
}
 
export default ItemCount;