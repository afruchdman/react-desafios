//componente de mayor nivel que contiene la lista de prod.
// Los productos se recuperan de un mockeado hasta recuperar desde la dB
// debemos usar un state para la acción de leer los datos mockeados y otro para esperar su load
import ItemList from "./ItemList.jsx";
import {  useState , useEffect} from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { miPromesa } from "../mocks/productos.js";

const ItemListContainer = ({mesage}) => {
    
    const [listaProductos,setlistaProductos] = useState([])
    const [cargando,setcargando] = useState(false)
    const [miError,setmiError] = useState(false)
    
    
    useEffect(()=>{
        setcargando(true)
        miPromesa
        .then((res)=>setlistaProductos(res))
        .catch((error)=>setmiError(true))
        .finally(()=>setcargando(false))
    },[])

    function retorno (){
        return miError?<h2 style={{color:'red'}}>Se ha producido un Error</h2>
        :cargando?<><Spinner animation="border" variant="success" size="xp"/><p className="h3  p-1 border-bottom" color="red">AGUARDE!</p></>
        :<ItemList listaProductos={listaProductos}/>}

    return (retorno());
} 
export default ItemListContainer;