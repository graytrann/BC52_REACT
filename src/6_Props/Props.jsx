import React from "react";
import UserProfile from "./UserProfile";
import Product from "./Product";
import Card from "./Card";
//props : thuộc tính
// console.log(icons);

export default function Props() {
  const product = {
    id: 1,
    name: "Iphone 13 Promax",
    price: 3000000,
  };

  const handleGetProduct = (product) => {
    alert(product.name);
  };
  return (
    <div>
      <h1>Props</h1>
      {/* truyền như thuộc tính html bình thường */}
      {/* muốn truyền nhiêu thuộc tính cũng được */}
      {/* truyền số : {}
      truyền chuỗi : "" */}
      {/* truyền boolen : chỉ cần tên thuộc tính */}
      <UserProfile name="Alice" age={18} isAdmin />
      <UserProfile name="Gray" age={21} isAdmin={false} />
      <UserProfile />
      <hr />
      <Product product={product} onGetProduct={handleGetProduct} />
      <hr />

      <Card heading="Greeting">
        <h1>Hello Hello</h1>
      </Card>
      <Card heading="User Profile">
        <UserProfile name="Tí" age={25} isAdmin></UserProfile>
      </Card>
    </div>
  );
}
