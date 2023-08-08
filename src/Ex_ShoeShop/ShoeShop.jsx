import React from "react";
import ShoeList from "./ShoeList";
import data from "./data.json";

console.log(data);

export default function ShoeShop() {
  return (
    <div className="container">
      <h1 className="text-center text-primary">Shoe Shop</h1>

      <ShoeList products={data} />
    </div>
  );
}
