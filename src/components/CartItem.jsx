import CartShow from "./CartShow";

const CartItem = ({Item}) => {
    return (
        <>
        <div>
            {
            Item.map((e)=><CartShow key={e.id} items={e}></CartShow>)
            }
        </div>
        </>
    );
}

export default CartItem;