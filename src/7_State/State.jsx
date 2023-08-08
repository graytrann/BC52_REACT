import React, { useState } from "react";

// những hàm có chữ use được gọi là Hooks
// Use state có 2 đặc tính :
// 1 :[số,hàm] : Số được gọi là components memories, bằng 1 cách nào đó giá trị nó vẫn được giữ khi chạy lại
// 2 :[số,hàm] : Hàm thay đổi giá trị của Số rồi tự chạy lại return khi có sự thay đổi nhưng không reset Số
export default function State() {
  //cách sử dụng useSate()
  const [count, setCount] = useState(1); // return về mảng gồm 2 phần tử, số trong hàm useState(1) là giá trị ban đầu

  const [message, setMessage] = useState("");

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleSetMessage = () => {
    const msg = prompt("Nhập vào message:");
    setMessage(msg);
  };

  // State là Mảng
  const [colors, setColors] = useState(["red", "green", "blue"]);

  const handleAddColor = () => {
    const color = prompt("Nhập màu muốn thêm:");
    // không được thay đổi giá trị của state mà phải thông qua setter
    // đưa vào 1 mảng mới ( dùng spread operator)
    setColors([...colors, color]);
  };

  const handleDeleteColor = () => {
    const color = prompt("Nhập màu muốn xóa:");
    const newColors = colors.filter((item) => item !== color);
    console.log(newColors);
    setColors([newColors]);
  };

  // State là Object
  const [user, setUser] = useState({ username: "", email: "" });

  const handleChangeUsername = () => {
    const username = prompt("UserName muốn đổi:");
    setUser({ ...user, username });
  };

  const handleChangeEmail = () => {
    const email = prompt("Email muốn đổi:");
    setUser({ ...user, email });
  };
  return (
    <div>
      <h1>State</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count * 0)}>RESET</button>

      <hr></hr>

      <p>Message: {message}</p>
      <button onClick={handleSetMessage}>set Message</button>

      <hr />
      <p>Colors: {colors.join(", ")}</p>
      <button onClick={handleAddColor}>Add Color</button>
      <button onClick={handleDeleteColor}>Delete Color</button>

      <hr />
      <p>
        Username : {user.username} - Email: {user.email}
      </p>
      <button onClick={handleChangeUsername}>Change UserName</button>
      <button onClick={handleChangeEmail}>Change Email</button>
    </div>
  );
}
