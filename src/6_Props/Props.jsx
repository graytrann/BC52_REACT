import React from "react";
import UserProfile from "./UserProfile";
//props : thuộc tính

export default function Props() {
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
      <UserProfile/>
    </div>
  );
}
