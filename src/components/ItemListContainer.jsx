import ItemCount from "./ItemCount.jsx";

const ItemListContainer = ({mesage}) => {return (
        <>
        <h2>{mesage}</h2>
        <ItemCount stock={5} initial={1} onAdd={'onAdd'} />
        </>
    );
} 
export default ItemListContainer;