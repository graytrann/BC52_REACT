import React from "react";

// // tất cả component sẽ nhận được props và ban đầu nó rỗng
// export default function UserProfile(props) {
//   // kĩ thuật Destructuring
//   // ở dưới là object lấy các thuộc tính có key là :
//   const { name, age, isAdmin } = props;
//   console.log("props(giá trị truyền vào):", props);
//   return (
//     <div>
//       {/* CÁCH 1 */}
//       {/* <h3>
//         Name: {props.name}
//         {props.isAdmin && <span>(Admin)</span>}
//       </h3>
//       <h3>Age: {props.age}</h3>
//       {/* CÁCH 2 */}
//       <h3>
//         Name: {name}
//         {isAdmin && <span>(Admin)</span>}
//       </h3>
//       <h3>Age: {age}</h3>
//     </div>
//   );
// }

// CÁCH 3
export default function UserProfile({
  name = "unknow",
  age = 0,
  isAdmin = false,
}) {
  return (
    <div>
      <h3>
        Name: {name}
        {isAdmin && <span>(Admin)</span>}
      </h3>
      <h3>Age: {age}</h3>
    </div>
  );
}
