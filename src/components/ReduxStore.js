import { createStore } from "redux";

const initialState = {
  quizDetail: {},
};

function userInfoReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USER_INFO": {
      console.log("action.payload.userInfo: ", action.payload.userInfo);
      console.log("action.payload.testQuestions: ", action.payload.testQuestions);
      return { ...state, userInfo: action.payload.userInfo, testQuestions: action.payload.testQuestions };
    }
    default:
      return state;
  }
}

const store = createStore(userInfoReducer);

export default store;
