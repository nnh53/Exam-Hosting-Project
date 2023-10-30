import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ScreenHome from "./layout/ScreenHome/ScreenHome";
import ScreenQuiz from "./layout/ScreenQuiz/ScreenQuiz";
import ScreenAnswer from "./layout/ScreenAnswer/ScreenAnswer";
import { AnswerProvider } from "./components/AnswerContext";
import { TimerProvider } from "./components/TimerContext";

function App() {
  return (
    <TimerProvider>
      <AnswerProvider>
        <div className="">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<ScreenHome />} />
              <Route path="/quiz" element={<ScreenQuiz />} />
              <Route path="/quiz/:quizId/answer" element={<ScreenAnswer />} />
            </Routes>
          </BrowserRouter>
        </div>
      </AnswerProvider>
    </TimerProvider>
  );
}

export default App;
