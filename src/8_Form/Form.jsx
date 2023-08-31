import React, { useState } from "react";

export default function Form() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    address: "",
    favouriteColor: "",
  });
  const handleSubmit = (event) => {
    // ngăn chặn hành vi mặc định khi submit form là reload lại page và đưa các giá trị lên url
    event.preventDefault();
    console.log("Form values:", values);
    handleReset();
  };

  const handleChange = (event) => {
    // if(event.target.name === "∏rname"){
    // setValues({ ...values, username: event.target.value });
    // }
    // Cần đặt thuộc tính name của input nó khớp với tên thuộc tính trong object value
    // kỹ thuật cấp giá trị động
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleReset = () => {
    setValues({
      username: "",
      email: "",
      address: "",
      favouriteColor: "",
    });
  };
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit} action="">
        <div className="mb-3">
          <label className="form-label" htmlFor="">
            UserName
          </label>
          <input
            className="form-control"
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="">
            Email
          </label>
          <input
            className="form-control"
            type="text"
            name="email"
            onChange={handleChange}
            value={values.email}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="">
            Address
          </label>
          <input
            className="form-control"
            type="text"
            name="address"
            onChange={handleChange}
            value={values.address}
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="">
            Favourite Color
          </label>
          <select
            name="favouriteColor"
            className="form-control"
            value={values.favouriteColor}
            onChange={handleChange}
            id=""
          >
            <option value="">---</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
        </div>
        {/* button mà nằm trong thể form thì sẽ là type submit */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button type="button" className="btn btn-warning" onClick={handleReset}>
          RESET
        </button>
      </form>
    </div>
  );
}
