import React, { useState } from "react";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import data from "./data.json";
import Cart from "./Cart";

export default function Shopping() {
  // state quản lý giá trị sản phẩm đang được chọn để xem chi tiết
  const [selectedProduct, setselectedProduct] = useState(null);

  //modal - state quản lý trạng thái ẩn hiện của modal giỏ hàng
  const [isOpen, setIsOpen] = useState(false);
  //end-modal

  // state quản lý sản phẩm trong giỏ hàng
  const [carts, setCarts] = useState([]);

  // totalProduct không cần tạo state, vì giá trị của nó được tính toán trên giá trị của state carts, vì khi nó reRender, nó cũng sẵn chạy lại hàm này
  const totalProduct = carts.reduce((result, item) => {
    return result + item.quantity;
  }, 0);
  //--------------------
  // CÁC HÀM :
  const handleGetProduct = (product) => {
    setselectedProduct(product);
  };

  // đóng giỏ hàng
  const handleCloseCart = () => {
    setIsOpen(false);
  };

  const handleAddToCart = (product) => {
    // kiểm tra sản phẩm đã tồn tại trong giỏ hàng hay chưa
    const found = carts.find((item) => item.id === product.id);
    if (found) {
      // Sản phẩm đã tồn tại trong giỏ hàng
      const newCarts = carts.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      setCarts(newCarts);
    } else {
      // sản phẩm chưa tồn tại trong giỏ hàng
      const productWithQuantiTy = { ...product, quantity: 1 };
      setCarts([...carts, productWithQuantiTy]);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center text-primary">Phone Shop</h1>
      <div className="d-flex justify-content-end">
        <button className="btn btn-danger" onClick={() => setIsOpen(true)}>
          Giỏ hàng ({totalProduct})
        </button>
      </div>

      <ProductList
        products={data}
        onGetProduct={handleGetProduct}
        onAddToCart={handleAddToCart}
      />
      <ProductDetails product={selectedProduct} />

      {/* <Cart isOpen={isOpen} /> */}
      {/* hoặc */}
      {isOpen && <Cart carts={carts} onCloseCart={handleCloseCart} />}
    </div>
  );
}
