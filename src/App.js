import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScreenHome from "./layout/ScreenHome/ScreenHome";
import ScreenQuiz from "./layout/ScreenQuiz/ScreenQuiz";
import ScreenAnswer from "./layout/ScreenAnswer/ScreenAnswer";
import { AnswerProvider } from "./components/AnswerContext";
import { QuizProvider } from "./components/QuizContext";
import "./App.css";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {
  return (
    <QuizProvider>
      <AnswerProvider>
        <div className="">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<ScreenHome />} />
              <Route path="/quiz" element={<ScreenQuiz />} />
              <Route path="/quiz/:quizId/answer" element={<ScreenAnswer />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </AnswerProvider>
    </QuizProvider>
  );
}

export default App;
