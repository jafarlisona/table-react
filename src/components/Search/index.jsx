import React, { useEffect, useState } from "react";
import "./index.css";

function Search() {
  const [inputValue, setInputValue] = useState("");
  const [seacrh, setSeacrh] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setSeacrh(data));
  }, []);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
            {/* filterle yazmaq lazimdi ,cunki render coxlu gedir.includes filterin icinde olmalidi */}
          {seacrh.map((x) => {
            if (
              x.name.toLowerCase().includes(inputValue.toLowerCase()) ||
              x.username.toLowerCase().includes(inputValue.toLowerCase()) ||
              x.email.toLowerCase().includes(inputValue.toLowerCase()) ||
              x.phone.toLowerCase().includes(inputValue.toLowerCase())) {
              return (
                <tr key={x.id}>
                  <td>{x.id}</td>
                  <td>{x.name}</td>
                  <td>{x.username}</td>
                  <td>{x.email}</td>
                  <td>{x.phone}</td>
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
