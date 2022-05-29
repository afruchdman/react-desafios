//componente contenedor de item
import {  useState , useEffect} from 'react';
import { miPromesa } from "../mocks/productos.js";
import ItemDetail from "./ItemDetail.jsx";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    
    const [miProducto,setmiProducto] = useState({})
    const [miError,setmiError] = useState(null)
    const {id} = useParams();
    
    useEffect(()=>{
        miPromesa
        .then((res)=> id ? setmiProducto(res.find(item=>item.id===parseInt(id))):setmiProducto(res))
        .catch(()=>setmiError(true))
    },[]
    )

        return (
            <>
            {miError?<h2 style={{color:'red'}}>Se ha producido un Error</h2>
            :<ItemDetail item={miProducto}/>}
            </>
        )
}
export default ItemDetailContainer;