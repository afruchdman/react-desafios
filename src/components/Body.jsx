import ItemListContainer from "./ItemListContainer.jsx";
import ItemDetailContainer from "./ItemDetailContainer.jsx";

import Title from "./Title.jsx";

const Body = () => {
        return (
        <>
        <Title/>
        {/*<ItemListContainer mesage={"Nuestros productos"}/>*/}
        <ItemDetailContainer/>
        </>
        ); 
    } 
    export default Body;