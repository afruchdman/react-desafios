import db from "../utils/firebaseConfig"
import {useContext} from "react";
import {CartContext} from "./CartContext";
import CartItem from "./CartItem";
import { Button } from "react-bootstrap";
import {  serverTimestamp,setDoc,doc,collection, updateDoc, increment } from "firebase/firestore"

 const Cart = () => {
    const {cartList,
        clearCart,
        calcsubtotal,
        calcimpuestos,
        calcTotalFinal,
        contadorItems
        } = useContext(CartContext)
    
const localClearCart=()=>{clearCart()}

const createOrder = () => {
    const itemForDB = cartList.map (item=>({
        id:item.id,
        price:item.price,
        title:item.name,
        qty:item.cantidad,
    }))
    let order = {
        buyer:{
            email:'alejandro.fruchdman@gmail.com',
            name:'Alejandro fruchdman',
            phone:'+5491155667771'
        },
        date: serverTimestamp(),
        total: calcTotalFinal(),
        items: itemForDB
        };
        //console.log(order);

        const createOrderinFireStore= async ()=>{
            const newOrderRef = doc(collection(db,"ordenesCompra"));
            await setDoc(newOrderRef,order);
            return newOrderRef;
        }

        createOrderinFireStore()
        .then(r=>alert("Su orden es: "+r.id))
        .catch(err=>console.log(err))
        
        //Actualizo stock
        cartList.forEach(async (item)=>{
            const itemRef = doc(db,"productos",item.id);
            await updateDoc(itemRef,{stock:increment(-item.cantidad)})
        })

        //Borrara carrito despues de termoar la compra
        localClearCart();
    };
    return (          
        contadorItems()===0 ?<p className="h2" style={{ color: 'red' }}>Tu carrito esta vacio</p>: 
            <>
            <h2 className="h4">Subtotal: {calcsubtotal()}</h2>
            <h2 className="h4">Impuestos: {calcimpuestos()}</h2>
            <h2 className="h2" style={{ color: 'red' }}>TOTAL: {calcTotalFinal()}</h2>
            <p><Button onClick={localClearCart}>Limpiar Carrito</Button></p>
            <p><Button onClick={createOrder}>FINALIZAR COMPRA!!</Button></p>
            <CartItem Item={cartList}></CartItem></>
            
    );
}

export default Cart;