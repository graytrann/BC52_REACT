import React from "react";

export default function Card({ heading, children }) {
  // mặc định khi viết lồng, ta sẽ có 1 prop là children, và nội dung trong nó sẽ được truyền vào children
  // children chứa tất cả content từ phần tử cha đưa vào phần tử con, đại diện cho nội dung nằm giữa Card
  return (
    <div className="card">
      <div className="card-header">{heading}</div>
      <div className="card-body">{children}</div>
    </div>
  );
}
