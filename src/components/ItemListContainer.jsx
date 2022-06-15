//componente de mayor nivel que contiene la lista de prod.
// Los productos se recuperan de un mockeado hasta recuperar desde la dB
// debemos usar un state para la acción de leer los datos mockeados y otro para esperar su load
import ItemList from "./ItemList.jsx";
import React ,{  useState , useEffect} from 'react';
import Spinner from 'react-bootstrap/Spinner';
//import { miPromesa } from "../mocks/productos.js";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import db from "../utils/firebaseConfig"

const ItemListContainer = () => {
    const [listaProductos,setlistaProductos] = useState([])
    const [cargando,setcargando] = useState(false)
    const [miError,setmiError] = useState(null)
    const { id } = useParams();


    useEffect(() => {
        const ref = collection(db,'productos');
        getDocs(ref)
        .then((snapshot) => {
            const productos = snapshot.docs.map((doc) => {return {id: doc.id, ...doc.data(),}});
            const categorias =  productos.filter((item) => item.catid === parseInt( id));
            id ? setlistaProductos(categorias) : setlistaProductos(productos);
        setcargando(false);
        })
        .catch((error)=>setmiError(true))
        .finally(()=>setcargando(false))
    }, [id]);


    return (
        <>
        {
            miError?<h2 style={{color:'red'}}>Se ha producido un Error</h2>
            :cargando?<><Spinner animation="border" variant="success" size="xp"/><p className="h3  p-1 border-bottom" color="red">AGUARDE!</p></>
            :<ItemList listaProductos={listaProductos}/>    
        }
        </>
    );
} 
export default ItemListContainer;