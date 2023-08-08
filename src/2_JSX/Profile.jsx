import React from "react";
// Quy tắc 1: JSX không cho phép có 2 thẻ đồng cấp ngoài cùng, thường phải bọc thẻ div ngoài cùng
// Trường hợp không sử dụng div, có thể sử dụng Fragment <></>, thẻ rỗng

// Quy tắc 2 : Vì JSX là Javascript nên có 1 số từ khóa bị thay thế ( class => className,tab-index => tabIndex, onclick => onClick)
// CSS inline cú pháp khác

//Quy tắc 3: Ta sử dụng cặp ngoặc nhọn khi muốn viết javascript , ta bọc chúng vào cặp ngoặc nhọn
// trước return cho phép ghi cú pháp js thoải mái
// ví dụ biến name bên dưới và truyền nó vào dưới bằng {name}

function Profile() {
  let name = "GRAY";

  const getClassName = () => {
    return "20DTHQA2";
  };

  return (
    <div>
      <h1 className="title">Name: {name}</h1>
      <h3 style={{ color: "red", fontWeight: 600 }}>Class: {getClassName()}</h3>
    </div>
    // hoặc
    // <> nội dung</> trình duyệt sẽ bỏ qua nó chứ ko phải nội dung vì nhiều khi ta không muốn display div
  );
}

export default Profile;
