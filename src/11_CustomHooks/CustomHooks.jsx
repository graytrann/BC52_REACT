import React from "react";
import useCount from "./useCount";
import useForm from "./useForm";

export default function CustomHooks() {
  const { count, handleIncrease, handleDecrease } = useCount();
  const { values, handleChange } = useForm({ email: "", password: "" });
  return (
    <div>
      <h1>Custom Hooks</h1>
      <hr />
      <p>Count: {count}</p>
      <button onClick={handleIncrease}>CỘNG</button>
      <button onClick={handleDecrease}>TRỪ</button>
      <hr />
      <form action="">
        <div>
          <label className="form-label" htmlFor="">
            Email
          </label>
          <input
            className="form-control"
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="form-label" htmlFor="">
            Mật Khẩu
          </label>
          <input
            className="form-control"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-success">Submit</button>
      </form>
    </div>
  );
}
