import { createContext, useState } from "react";
export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList,setCartList]=useState([]);

    //funcion para agregar carrito
    const addToCart = (item,cantidad)=>{
        let found = cartList.find( el=>el.id === (item.id));
        if(found===undefined){found=-1}

        const findDuplicated = (found,cartList) =>{
            cartList.forEach(element => {
                if (found.id===element.id) { return element.cantidad=element.cantidad+cantidad}
                else {return element.cantidad}                
            });
        }
        if (isInCart(item.id)!==-1){findDuplicated(found,cartList)}else{item.cantidad=cantidad;setCartList([...cartList,item])};
    }    

//funcion para vaciar carrito
const clearCart=()=>{
setCartList([])
}

//Funcion oara quitar un elemento del carrito
const removeItemCart = (id) =>{
const nuevoCarrito=cartList.filter(el=>el.id!==id)

setCartList(nuevoCarrito)
}

const isInCart = (id) =>{
    let found = cartList.find( el=>el.id === (id));
    if(found===undefined){found=-1}
return found}

    return (
    <CartContext.Provider value={{cartList,addToCart,removeItemCart,clearCart,isInCart}}>
        {children}
    </CartContext.Provider>);
    }
    export {CartContextProvider};
    export default CartContextProvider;