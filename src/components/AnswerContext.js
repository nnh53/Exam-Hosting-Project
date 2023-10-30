import React, { createContext, useContext, useState } from "react";

const AnswerContext = createContext();

export function useAnswerContext() {
  return useContext(AnswerContext);
}

export function AnswerProvider({ children }) {
  const [userAnswers, setUserAnswers] = useState([]);
  return <AnswerContext.Provider value={{ userAnswers, setUserAnswers }}>{children}</AnswerContext.Provider>;
}
