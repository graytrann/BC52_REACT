import React from "react";

export default function ProductItem({ product, onGetProduct,onAddToCart }) {
  return (
    <div className="card">
      <img
        className="card-img"
        src={product.img}
        alt={product.name}
        width="100%"
        height="350px"
      />
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <button
          className="btn btn-success"
          onClick={() => {
            onGetProduct(product);
          }}
        >
          Xem chi tiết
        </button>
        <button
          className="btn btn-warning ms-3"
          onClick={() => {
            onAddToCart(product);
          }}
        >
          THÊM GIỎ HÀNG
        </button>
      </div>
    </div>
  );
}
