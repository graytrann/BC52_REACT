import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./redux/reducer/counterReducer";
import todosReducer from "./redux/reducer/todoReducer";
import busTicketReducer from "./redux/reducer/busTicketReducer";
// hàm tạo ra store của redux để mà cấu hình ra Reducer
// mỗi Reducer làm 1 chức năng khác nhau
// phải gán giá trị lúc đầu cho nó vì lần đầu state đưa vào Reducer không có giá trị

//STORE LƯU TRỮ REDUCER
const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    busTicket: busTicketReducer,
  },
});

// // ============ DEMO ===========
// // 1. Store cung cấp hàm getState
// console.log("State trong Store trước khi incrase:", store.getState());

// // 3. Store cung cấp hàm subscibe (chạy 1 cách tự động) , tham số là callback
// store.subscribe(() => {
//   console.log("State sau khi thay đổi:", store.getState()); // có gì thay đổi thì sẽ tự gọi lại hàm store.getState()
// });

// const action = { type: "increase" };

// // 2. Store cung cấp hàm dispatch (cầm action gửi lên store)
// store.dispatch(action);
// store.dispatch({ type: "decrease" });

// store.dispatch({ type: "increaseByAmount", payload: 69 }); // tham số 2 là optional

// // console.log("State trong Store sau khi increase:", store.getState());

export default store;
