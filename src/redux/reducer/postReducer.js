import {
  GET_POSTS_FULFILLED,
  GET_POSTS_PENDING,
} from "../constants/postConstant";

const initState = {
  posts: [],
  isLoading: false, // loading giao diện trước khi call api thành công
  error: null,
  // biến isLoading và error luôn luôn có khi call API
};

const postReducer = (state = initState, action) => {
  //
  switch (action.type) {
    case GET_POSTS_PENDING: {
      return { ...state, isLoading: true };
    }
    case GET_POSTS_FULFILLED: {
      return { ...state, posts: action.payload, isLoading: false };
    }
    case GET_POSTS_FULFILLED: {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    }
    default:
      return state;
  }
};

export default postReducer;
