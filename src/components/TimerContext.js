import React, { createContext, useContext, useState } from "react";

const TimerContext = createContext();

export function useTimerContext() {
  return useContext(TimerContext);
}

export function TimerProvider({ children }) {
  const [userTimer, setUserTimer] = useState();
  return <TimerContext.Provider value={{ userTimer, setUserTimer }}>{children}</TimerContext.Provider>;
}
