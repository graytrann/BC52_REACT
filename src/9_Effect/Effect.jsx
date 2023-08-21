import React, { useEffect, useState } from "react";
import axios from "axios";
import Children from "./Children";


export default function Effect() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [username, setUsername] = useState("");
  // useEffect sẽ chạy sau khi components này render xong giao diện - CHẠY ĐÚNG 1 LẦN DUY NHẤT
  useEffect(() => {
    // axios({
    //   method: "GET",
    //   url: "https://64a6ad14096b3f0fcc8042cd.mockapi.io/users",
    //   params: {
    //     name: searchTerm || undefined,
    //   },
    // }).then((response) => {
    //   setUsers(response.data);
    // });

    const getUsers = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: "https://64a6ad14096b3f0fcc8042cd.mockapi.io/users",
          params: {
            name: searchTerm || undefined,
          },
        });
        console.log(response.data);
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, [searchTerm]);

  // useEffect mảng chứa tham số
  // useEffect(() => {
  //   console.log("Search term :", searchTerm);
  // }, [searchTerm]);

  // const callAxios = () => {
  //   axios({
  //     method: "GET",
  //     url: "https://jsonplaceholder.typicode.com/users",
  //   }).then((response) => {
  //     setUsers(response.data);
  //   });
  // };
  // callAxios();

  const handleSetUsername = () => {
    const value = prompt("Input User Name Please:");
    setUsername(value);
  };
  console.log("render run");


  return (
    <div>
      <h1>Effect</h1>
      <input
        placeholder="Search user"
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.firstName}</li>;
        })}
      </ul>
      <hr />
      <button onClick={handleSetUsername}>Set UserName</button>
      {username && <Children username={username} />}
      <hr />

    </div>
  );
}

// MOUTING -> KHỞI TẠO STATE -> RENDER UI -> GỌI EFFECT CALLBACK(NẾU CÓ)
// UDATING ( STATE  HOẶC PROPS THAY ĐỔI ) -> GÕI EFFECT CALLBACK (NẾU DEPENDENCIES THAY ĐỔI) useEffect(()=>{},[a,b,c])
// khi nào sử dụng useEfffect
// + muốn hàm tự chạy
// + state hoặc props thay đổi thì chạy lại đoạn mã nào đó
