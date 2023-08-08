import React from "react";

export default function ShoeItem({ product }) {
  return (
    <div className="card mb-5">
      <img className="card-img" src={product.image}></img>
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-text">{product.price}</p>
      </div>
    </div>
  );
}
