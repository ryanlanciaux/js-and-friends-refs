import React, { useRef, useState } from "react";
import "./Search.css";
import Button from "./Button";

function handleEnter(e, callback) {
  if (e.key === "Enter" || e.keyCode === 13) {
    callback(e.target.value);
    e.target.value = "";
  }

  return;
}

function Search({ onEnter }) {
  /*
  Directions:

  1) Create a variable that leverages the useRef hook
  2) Add this ref to the input box
  3) Update the clear input arrow function to reset the ref's current.value (someItem.current.value = "")
  4) Call the onEnter callback with the ref's value on click

  Hint:

  Remember to use refItem.current.value instead of refItem.value
  */

  const clearInput = () => {};

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <label htmlFor="product-search">Find product</label>
      <input
        name="product-search"
        type="text"
        onKeyUp={e => {
          handleEnter(e, onEnter);
        }}
      />
      <Button
        onClick={() => {
          // call onEnter with the value here
          clearInput();
        }}
      >
        Go
      </Button>
    </div>
  );
}

export default Search;
