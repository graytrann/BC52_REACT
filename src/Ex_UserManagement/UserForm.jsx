import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UserForm({ onSubmitSuccess, selectedUser }) {
  const [values, setValues] = useState({
    //state quản lý giá trị của các inputs trong form
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    address: "",
    phone: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const { id, ...payload } = values;

    const options = id
      ? {
          method: "PUT",
          url: `https://64a6ad14096b3f0fcc8042cd.mockapi.io/users/${id}`,
          data: payload,
        }
      : {
          method: "POST",
          url: "https://64a6ad14096b3f0fcc8042cd.mockapi.io/users?fbclid=IwAR3wANItAtTL3Co9hs63h-ZR41yUcoO9w_wBi2sVN4lzm28qMUpraqTX_p8",
          data: payload,
        };
    try {
      await axios(options);
      // Thêm thành công
      onSubmitSuccess();
      //RESET
      setValues({
        firstName: "",
        lastName: "",
        email: "",
        dateOfBirth: "",
        address: "",
        phone: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Dùng useEffect đẻ theo dõi khi giá trị của prop selectedUser thay đổi sẽ cập nhật state values
  useEffect(() => {
    // kiểm tra nếu selectedUser là null => không làm gì hết
    if (!selectedUser) {
      return;
    }

    setValues({ ...selectedUser });
  }, [selectedUser]);
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label" htmlFor="firstName">
          First Name
        </label>
        <input
          className="form-control"
          id="firstName"
          type="text"
          value={values.firstName}
          name="firstName"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="lastName">
          Last Name
        </label>
        <input
          className="form-control"
          id="lastName"
          type="text"
          value={values.lastName}
          name="lastName"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="email ">
          Email
        </label>
        <input
          className="form-control"
          id="email"
          type="text"
          value={values.email}
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="dateOfBirth">
          Date Of Birth
        </label>
        <input
          className="form-control"
          id="dateOfBirth"
          type="text"
          value={values.dateOfBirth}
          name="dateOfBirth"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="address">
          Address
        </label>
        <input
          className="form-control"
          id="address"
          type="text"
          value={values.address}
          name="address"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="phone">
          Phone
        </label>
        <input
          className="form-control"
          id="phone"
          type="text"
          value={values.phone}
          name="phone"
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
