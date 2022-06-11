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

//funcion que calcula el total x producto o item 
const calctotalbyItem=(id)=>{
let index = cartList.map (item=>item.id).indexOf(id);
return cartList[index].price *  cartList[index].cantidad; 
}
//funcion que calcula el subtotal de la factura sin impuestos
const calcsubtotal=()=>{
let totalxItem = cartList.map (item=>calctotalbyItem(item.id));
return totalxItem.reduce(((previousValue, currentValue) => previousValue + currentValue),0)
}
//funcion que calcula impuestos
const calcimpuestos=()=>{
    const impuesto=0.21
return calcsubtotal() * impuesto;
}
//funcion que calcula el totoal de la factura
const calcTotalFinal=()=>{
return calcsubtotal()+calcimpuestos();
}
//funcion que calcula el totoal de items, de cantidad de items
const contadorItems=()=>{
    let qtys=cartList.map(item=>item.cantidad);
return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue),0);
}



    return (
    <CartContext.Provider value={{
        cartList,
        addToCart,
        removeItemCart,
        clearCart,
        isInCart,
        calctotalbyItem,
        calcsubtotal,
        calcimpuestos,
        calcTotalFinal,
        contadorItems
        }}>
        {children}
    </CartContext.Provider>);
    }
    export {CartContextProvider};
    export default CartContextProvider;