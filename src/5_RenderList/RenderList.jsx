import React from "react";

export default function RenderList() {
  const animals = ["Dog", "Cat", "Duck", "Pig"];

  // muốn nó thành list bên dưới
  const list = [<li>Dog</li>, <li>Cat</li>, <li>Duck</li>, <li>Pig</li>];

  const newList = animals.map((item, index) => {
    // bắt buộc phải truyền vào key và giá trị ko đc trùng lặp
    return <li key={index}>{item}</li>;
  });

  const products = [
    { id: 1, name: "Iphone", price: "3000000" },
    { id: 2, name: "Samsung", price: "2500000" },
    { id: 3, name: "Oppo X5", price: "1500000" },
  ];

  //   const productsList = products.map((item, index) => {
  //     // bắt buộc phải truyền vào key và giá trị ko đc trùng lặp
  //     return (
  //       <li key={index}>
  //         {item.id}-{item.name}-{item.price}
  //       </li>
  //     );
  //   });

  return (
    <div>
      <h1>RenderList</h1>
      {/* <ul>{list}</ul> */}
      <ul>{newList}</ul>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
