import { useContext, useState } from "react";
import CartShow from "./CartShow";

const CartItem = ({Item}) => {
    return (
        <>
        {console.log(Item)}
        <div>
            {
            Item.map((e)=><CartShow Key={e.id} items={e}></CartShow>)
            }
        </div>
        </>
    );
}

export default CartItem;