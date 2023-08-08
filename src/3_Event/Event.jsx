import React from "react";

//html : <button onclick="handleClick()">Click</button>

// React :
// Truyền vào hàm: <button onClick={handleClick()}>Click 1</button> (SAI)
// Truyền vào hàm: <button onClick={handleClick}>Click 1</button> (ĐÚNG)

export default function Event() {
  const handleClick = () => {
    alert("Clicked 1");
  };

  const handleShowMessage = (name) => {
    alert(`Hello ${name}`);
  };

  const handleChange = (Event) => {
    console.log(Event.target.value);
  };
  return (
    <div>
      <h1>Events</h1>

      <button onClick={handleClick}>Click 1</button>
      <button
        onClick={() => {
          alert("Clicked 2");
        }}
      >
        Click 2
      </button>
      <button
        onClick={() => {
          handleShowMessage("Gray");
        }}
      >
        Show Message
      </button>
      <br></br>
      <br></br>
      <input type="text" onChange={handleChange}></input>
      <input
        type="text"
        onChange={(Event) => {
          console.log(Event.target.value);
        }}
      ></input>
    </div>
  );
}
