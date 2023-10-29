import React from "react";
import Question from "../../components/Question/Question";
import { getDateTimeAfter20Mins } from "../../utils/QuizService";
import "./ScreenQuiz.scss";
import CountDownTimer from "../../components/CountDownTimer/CountDownTimer";
import CustomButton from "../../components/CustomButton";
import { useLocation } from "react-router-dom";
import Title from "../../components/Title/Title";

export default function ScreenQuiz() {
  const location = useLocation();
  let quiz = location.state.data;
  const lzQuiz = Object.values(quiz.lsQuizz);

  const dateTimeAfter20Mins = getDateTimeAfter20Mins();

  return (
    <div className="ScreenQuiz">
      <header className="header">
        <Title />
        <span>You have 20 minutes to finish this test</span>
        <CountDownTimer targetDate={dateTimeAfter20Mins} />
      </header>

      <div className="questionList">
        {lzQuiz.map((question, index) => {
          return <Question key={index} question={question} index={index + 1} />;
        })}
      </div>

      <CustomButton linkTo={"/quiz/1/answer"} type={"primary"} text={"SUBMIT"} />

      <div style={{ height: 100 }}></div>
    </div>
  );
}
