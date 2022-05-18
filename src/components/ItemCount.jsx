import {  useState } from 'react';
import CartWidget from './CartWidget';


const ItemCount = ( {stock = 0, initial = 1,  onAdd }) => {
    const [contador, setcontador] = useState(0);

    //funcion para incrementar contador
    const sumarproducto =()=>{
        if (contador<stock) {setcontador(contador+1)}  
    }
    //funcion para decrementar contador
    const restarproducto =()=>{
        if(contador>=initial) {setcontador(contador-1)}
    }
    
     onAdd = (cantidad)=>{
         console.log(cantidad);
    }

    return (
      <>
      <div class="btn-group me-1">
          <a href="#" class="btn btn-primary" onClick={sumarproducto}>+</a>
          <a href="#" class="btn btn-primary"onClick={restarproducto}>-</a>
      </div>
      <div class="btn-group">
          <a href="#" class="btn btn-primary active" aria-current="page" onClick={() => onAdd(contador)} >Agregar al carrito <span className="Balloon">{contador}</span> productos</a>
      </div>
      </>    
    );
}
 
export default ItemCount;