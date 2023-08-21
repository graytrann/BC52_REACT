import React from "react";
import axios from "axios";

export default function UserList({ users, onDeleteSuccess, onSelectUser }) {
  const handleDelete = async (userID) => {
    try {
      await axios({
        method: "DELETE",
        url: `https://64a6ad14096b3f0fcc8042cd.mockapi.io/users/${userID}`,
      });
      // XÓA THÀNH CÔNG
      onDeleteSuccess();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-3">
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Date Of Birth</th>
            <th>Address</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastNam}e</td>
                <td>{user.email}</td>
                <td>{user.dateOfBirth}</td>
                <td>{user.address}</td>
                <td>{user.phone}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      onSelectUser(user.id);
                    }}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(user.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
