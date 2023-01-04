import React from "react";
import Products from "../components/Products";

const Home = ()=> {

    return (
      <div className="App">
      <h1>welcome to redux toolkit store</h1>
      <section>
        <h3>products</h3>
        <Products />
      </section>
      </div>
    )
}
export default Home;