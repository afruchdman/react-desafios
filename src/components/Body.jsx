import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./ItemListContainer.jsx";
import ItemDetailContainer from "./ItemDetailContainer.jsx";
import Menu from "./Menu.jsx";

const Body = () => {
    return (
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:id' element={<ItemListContainer />} />
                <Route path='/item/:id' element={<ItemDetailContainer />} />
            </Routes>
        </BrowserRouter>
    );
    } 
    export default Body;