import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./ItemListContainer.jsx";
import ItemDetailContainer from "./ItemDetailContainer.jsx";
import Menu from "./Menu.jsx";
import Cart from "./Cart.jsx";
import  CartContextProvider      from "./CartContext.jsx";

const Body = () => {
    return (
        <CartContextProvider >
            <BrowserRouter>
                <Menu/>
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/category/:id' element={<ItemListContainer />} />
                    <Route path='/item/:id' element={<ItemDetailContainer />} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </CartContextProvider>
    );
    } 
    export default Body;