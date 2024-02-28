import React, { useEffect, useState } from "react";
import Profile from "./Profile";

const Home = () => {
  const [countObj, setCount] = useState({
    cnt: 5,
    productName: "Apple Iphone",
    total: 150,
    ProductVal: 30,
  });

  const [resouceState, setResource] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resouceState}`)
      .then((response) => response.json())
      .then((json) => setItems(json));

    //optional code to cleanup
  }, [resouceState]);

  useEffect(() => {
    //code to execture
    console.log(countObj.productName);

    //option
    return () => {
      console.log("Clean up my self");
    };
  }, [countObj]);

  useEffect(() => {
    //code to execture
    console.log(countObj.cnt);

    //option
    return () => {
      console.log("Clean up my self");
    };
  }, [countObj.cnt]);

  function increment() {
    setCount((preObj) => {
      return {
        ...preObj,
        cnt: preObj.cnt + 1,
        total: preObj.total + preObj.ProductVal,
      };
    });
  }
  function decrement() {
    setCount((preObj) => {
      return {
        ...preObj,
        cnt: preObj.cnt - 1,
        total: preObj.total - preObj.ProductVal,
      };
    });
  }
  return (
    <>
      <button onClick={() => setResource("posts")}> Posts </button>
      <button onClick={() => setResource("users")}> Users </button>
      <button onClick={() => setResource("comments")}> Comments </button>
      <br />
      {resouceState}
      {items.map((item) => {
        return <pre> {JSON.stringify(item)}</pre>;
      })}
      <div>Home</div>
      <button onClick={decrement}> - </button>
      {countObj.cnt} - {countObj.productName}
      <button onClick={increment}> + </button>
      <h1>Total:{countObj.total}</h1>
      <Profile />
    </>
  );
};

export default Home;
