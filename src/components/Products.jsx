import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getData, STATUSES } from "../store/productSlice";

const Products = () => {
  // const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const {data:product, status} = useSelector(state=>state.product)

  useEffect(() => {
    dispatch(getData())
    // getData();
  }, [])
  // const getData = async () => {
  //   const res = await fetch("https://fakestoreapi.com/products");
  //   const data = await res.json();
  //   setProduct(data)
  // }
  const HandleAdd = (item) => {
    dispatch(add(item))
  }

  if(status == STATUSES.LOADING){
    return <h2 style={{margin:'100px'}}>Loading...</h2>
  }
  if(status == STATUSES.ERROR){
    return <h2>Something went wrong...!</h2>
  }
  return (
    <div className="container">
      <div className="row">
        {
          product.map((x) => {
            return <div className="card col-3 m-2" style={{ width: "18rem" }} key={x.id}>
              <img src={x.image} className="card-img-top" style={{ aspectRatio: "1/1" }} alt="..." />
              <div className="card-body">
                <h5 className="card-title">{x.title}</h5>
                <p className="card-text">RS. {x.price}</p>
                <button className="btn btn-primary" onClick={() => HandleAdd(x)}>Add to Cart</button>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}
export default Products;