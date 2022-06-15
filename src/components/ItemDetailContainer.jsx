//componente contenedor de item
import {  useState , useEffect} from 'react';
import ItemDetail from "./ItemDetail.jsx";
import { useParams } from "react-router-dom";
import db from "../utils/firebaseConfig"
import { doc, getDoc} from 'firebase/firestore';


const ItemDetailContainer = () => {
    
    const [miProducto,setmiProducto] = useState({})
    const [miError,setmiError] = useState(null)
    const {id} = useParams();
    

    useEffect(() => {
        const ref = doc(db, 'productos', id);
        getDoc(ref).then((snapshot) => {
            setmiProducto({
                id: snapshot.id,
                ...snapshot.data(),
            })
        })
        .catch(()=>setmiError(true))
    }, [id]);


        return (
            <>
            {miError?<h2 style={{color:'red'}}>Se ha producido un Error</h2>
            :<ItemDetail item={miProducto}/>}
            </>
        )
}
export default ItemDetailContainer;