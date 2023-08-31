import {
  GET_POSTS_FULFILLED,
  GET_POSTS_PENDING,
  GET_POSTS_REJECTED,
} from "../constants/postConstant";
import axios from "axios";

// export const getPosts = (posts) => {
//   // Action này là bên giao diện gọi
//   return {
//     type: GET_POSTS,
//     payload: posts,
//   };
// };

export const getPosts = () => {
  // MIDDLEWARE
  // nhận 2 tham số, dispatch và getState (của Store)
  // PHẢI CÓ REDUX-THUNK mới dispatch được hàm (vì dispatch mặc định là object)
  // TÁI SỬ DỤNG (MỤC ĐÍCH)
  return async (dispatch, getState) => {
    try {
      dispatch({ type: GET_POSTS_PENDING });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      dispatch({ type: GET_POSTS_FULFILLED, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_POSTS_REJECTED, error: error.response.data });
    }
  };
};
