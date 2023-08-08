import React from "react";

function UserGreeting() {
  let unreadMessages = 5;

  return (
    <>
      <div>Welcome Back</div>
      {unreadMessages > 0 && <p>You have {unreadMessages} unread messages</p>}
    </>
  );
}

function GuestGreeting() {
  return <div>Please Login</div>;
}

export default function ConditionalRendering() {
  let isLoggedIn = true;
  let shouldDisplay = true;
  let unreadMessages = 5;

  let greeting = "";

  //   if (isLoggedIn) {
  //     greeting = <div>Welcome</div>;
  //   } else {
  //     greeting = <div>Please login</div>;
  //   }

  if (!shouldDisplay) {
    // nó sẽ ngăn luôn trang
    return null;
  }
  return (
    <div>
      <h1>ConditionalRendering</h1>
      {/* TRƯỜNG HỢP BÌNH THƯỜNG */}
      {greeting}
      {/* {isLoggedIn ? (
        <>
          <div>Welcom 3 ngôi</div>
          {unreadMessages > 0 && (
            <p>You have {unreadMessages} unread messages</p>
          )}
        </>
      ) : (
        <>
          <div>Please login 3 ngôi</div>
        </>
      )}
    </div> */}
      {/*  TRƯỜNG HỢP SỬ DỤNG COMPONENT */}
      {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
    </div>
  );
}
