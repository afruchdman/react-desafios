//Este componente es la lista de productos mapeadas
import React from "react";
import Item from "./Item.jsx";

const ItemList = ({listaProductos})=>{
    return(
        <div className="d-flex justify-context-betwen flex-wrap">
            {listaProductos.map((miProducto)=>
            <Item key={miProducto.id} producto={miProducto}/>)}
        </div>
    )
}
export default ItemList