import React, { useState, useEffect } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";
import axios from "axios";

export default function UserManagerment() {
  // state lưu trữ danh sách người dùng từ API của hàm getUsers từ UseEffect
  const [users, setUsers] = useState([]);

  // state quản lý người dùng đang được chọn
  const [selectedUser, setSelectedUser] = useState(null);

  // hàm gọi API lấy danh dách User - Async để chạy bât đồng bộ mà không gián đoạn
  const getUsers = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "https://64a6ad14096b3f0fcc8042cd.mockapi.io/users?fbclid=IwAR3wANItAtTL3Co9hs63h-ZR41yUcoO9w_wBi2sVN4lzm28qMUpraqTX_p8",
      });

      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // hàm nhận vào UserId và tìm user tương ứng
  const getUserById = async (userId) => {
    try {
      const response = await axios({
        method: "GET",
        url: `https://64a6ad14096b3f0fcc8042cd.mockapi.io/users/${userId}`,
      });
      setSelectedUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // UseEffect - hàm tự chạy , ở mục mảng Dependencies , ta để [] đẻ chạy 1 lần duy nhất
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="container">
      <h1 className="text-center text-primary">User Management</h1>
      <UserForm selectedUser={selectedUser} onSubmitSuccess={getUsers} />
      <hr />
      <UserList
        users={users}
        onDeleteSuccess={getUsers}
        onSelectUser={getUserById}
      />
    </div>
  );
}
