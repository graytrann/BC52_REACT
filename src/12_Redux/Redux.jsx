import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Redux() {
  // getState và Subcribe , useSelector là lấy xuống
  const counter = useSelector((state) => {
    return state.counter;
  });

  // TO DO
  const todos = useSelector((state) => {
    return state.todos;
  });

  // Dispatch là gửi yêu cầu lên
  const dispatch = useDispatch();
  const handleIncrease = () => {
    dispatch({ type: "increase" });
  };

  const handleDecrease = () => {
    dispatch({ type: "decrease" });
  };

  const handleIncreaseByAmount = () => {
    const num = +prompt("Input Number");
    dispatch({ type: "increaseByAmount", payload: num });
  };

  const handleAddToDo = () => {
    const todo = {
      id: Math.floor(Math.random() * 100),
      title: prompt("input todo title"),
      isCompleted: false,
    };

    dispatch({ type: "addTodo", payload: todo });
  };

  const handleDeleteTodo = (todoId) => {
    dispatch({ type: "deleteTodo", payload: todoId });
  };

  const handleCompleteTodo = (todoId) => {
    dispatch({ type: "completeTodo", payload: todoId });
  };
  return (
    <div>
      <h1>REDUX</h1>

      <hr />
      <p>Counter: {counter}</p>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
      <button onClick={handleIncreaseByAmount}>Increase By Amount</button>
      <hr />
      <p>TO DO</p>
      <button className="mb-3" onClick={handleAddToDo}>
        Add todo
      </button>
      <ul>
        {/* todo: {id: 1, title: "Learn React", isComplete: true/false} */}
        {todos.map((item) => {
          return (
            <li key={item.id}>
              <span
                onClick={() => {
                  handleCompleteTodo(item.id);
                }}
                style={{
                  textDecoration: item.isCompleted ? "line-through" : "none",
                }}
              >
                {item.title}
              </span>
              <button
                onClick={() => {
                  handleDeleteTodo(item.id);
                }}
                className="btn btn-danger ms-3"
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
