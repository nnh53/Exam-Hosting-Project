import { createStore } from "redux";

export function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

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

const persistedState = loadFromLocalStorage();
const store = createStore(userInfoReducer, persistedState);

// Save the state to localStorage every time it changes
store.subscribe(() => {
  const state = store.getState();
  saveToLocalStorage(state);
});

export default store;
