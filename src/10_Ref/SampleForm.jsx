import React, { forwardRef, useState } from "react";
// hooks forwardRef dùng để nhận props là 1 ref từ component cha

function SampleForm({ onSubmit }, ref) {
  const [values, setValues] = useState({ email: "", password: "" });
  return (
    <div>
      <h1 className="text-center text-success">Sample Form</h1>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          onSubmit(values);
        }}
        ref={ref}
        action=""
        className="mb-3"
      >
        <div>
          <label className="form-label" htmlFor="">
            Email
          </label>
          <input className="form-control" type="text" name="email" />
        </div>
        <div>
          <label className="form-label" htmlFor="">
            Password
          </label>
          <input className="form-control" type="password" name="password" />
        </div>
      </form>
    </div>
  );
}

export default forwardRef(SampleForm);
