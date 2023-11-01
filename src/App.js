import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScreenHome from "./layout/ScreenHome/ScreenHome";
import ScreenQuiz from "./layout/ScreenQuiz/ScreenQuiz";
import ScreenAnswer from "./layout/ScreenAnswer/ScreenAnswer";
import { AnswerProvider } from "./components/AnswerContext";
import { QuizProvider } from "./components/QuizContext";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { Provider } from "react-redux";

import "./App.css";
import store from "./components/ReduxStore";

function App() {
  return (
    <Provider store={store}>
      <QuizProvider>
        <AnswerProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<ScreenHome />} />
              <Route path="/quiz" element={<ScreenQuiz />} />
              <Route path="/quiz/answer" element={<ScreenAnswer />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </BrowserRouter>
        </AnswerProvider>
      </QuizProvider>
    </Provider>
  );
}

export default App;
