import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = ()=> {
    const dispatch = useDispatch();
    const addedItem = useSelector(state=>state.cart)
    const handleRemove = (itemId)=>{
        dispatch(remove(itemId))
    }
    return (
      <>
      <div className="container App">
        <h3  className="m-3 text-dark">Cart</h3>
        <div className="overFlow rounded-3" >
            {addedItem.map((x)=>{
                return <div className="row border border-success border-4 m-2 rounded-5" key={x.id}>
                <div className="col">
                    <img src={x.image} className="" style={{ height: "150px", aspectRatio: "1/1" }} alt="" />
                </div>
                <div className="col mt-4">
                    <h5 className="">{x.title}</h5>
                </div>
                <div className="col mt-5">
                    <h5 className="">RS. {x.price}</h5>
                </div>
                <div className="col mt-5">
                    <button className="btn btn-danger" onClick={() => handleRemove(x.id)}>remove</button>
                </div>
            </div>
            })}
        </div>
      </div>
      </>
    )
}
export default Cart;