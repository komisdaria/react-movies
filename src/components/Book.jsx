import React from "react";

const Book = (props) => {
  return props.name ? ( 
    <div>
      {/* <h2>Hello, {props.name ? <span>{props.name}</span> : <span>default name</span>}</h2> */}
      <h2>Hello, {props.name}</h2>
      <p>{props.year}</p>
      <p>{props.price}</p>
    </div>
   ) : null; 
}
 
export default Book;