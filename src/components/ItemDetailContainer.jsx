//componente contenedor de item
import {  useState , useEffect} from 'react';
import { miPromesa } from "../mocks/productos.js";
import ItemDetail from "./ItemDetail.jsx";

const ItemDetailContainer = () => {
    
    const [miProductos,setmiProductos] = useState([])
    const [miError,setmiError] = useState(false)

    
    useEffect(()=>{
        miPromesa
        .then((res)=>setmiProductos(res[3]))
        .catch((error)=>setmiError(true))
    },[]
    )

    function retorno (){
        return miError?<h2 style={{color:'red'}}>Se ha producido un Error</h2>
        :<ItemDetail item={miProductos}/>}

        return (retorno());
} 
export default ItemDetailContainer;