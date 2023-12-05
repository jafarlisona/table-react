import React, { useEffect, useState } from "react";
import "./index.css";

function Search() {
  const [inputValue, setInputValue] = useState("");
  const [seacrh, setSeacrh] = useState([]);
  const [categoryApi, setCategoryApi] = useState([]);
  const [category, setCategory] = useState("");
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    fetch("https://northwind.vercel.app/api/products")
      .then((res) => res.json())
      .then((data) => setSeacrh(data));
    fetch("https://northwind.vercel.app/api/categories")
      .then((res) => res.json())
      .then((data) => setCategoryApi(data));
  }, []);
  function handleCategory(id) {
    setCategory(id);
  }
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {categoryApi.map((item) => (
        <button key={item.id} onClick={()=>handleCategory(item.id)}>{item.name}</button>
      ))}
      <button onClick={() => handleCategory("")}>All</button>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Name</th>
            {/* <th>Username</th>
            <th>Email</th>
            <th>Phone</th> */}
          </tr>
        </thead>
        <tbody>
          {/* filterle yazmaq lazimdi ,cunki render coxlu gedir.includes filterin icinde olmalidi */}
          {seacrh.map((x) => {
            if (
              x.name.toLowerCase().includes(inputValue.toLowerCase()) &&
              x.categoryId.toString().includes(category)
              // x.name.toLowerCase().includes(inputValue.toLowerCase()) ||
              // x.username.toLowerCase().includes(inputValue.toLowerCase()) ||
              // x.email.toLowerCase().includes(inputValue.toLowerCase()) ||
              // x.phone.toLowerCase().includes(inputValue.toLowerCase())) {
            ) {
              return (
                <tr key={x.id}>
                  <td>{x.categoryId}</td>
                  <td>{x.name}</td>
                  {/* <td>{x.username}</td>
                  <td>{x.email}</td>
                  <td>{x.phone}</td> */}
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </>
  );
}

export default Search;
