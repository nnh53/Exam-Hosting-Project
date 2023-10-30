import React, { createContext, useContext, useState } from "react";

const QuizContext = createContext();

export function useQuizContext() {
  return useContext(QuizContext);
}

export function QuizProvider({ children }) {
  const [quizDetail, setQuizDetail] = useState({});
  return <QuizContext.Provider value={{ quizDetail, setQuizDetail }}>{children}</QuizContext.Provider>; //
}
