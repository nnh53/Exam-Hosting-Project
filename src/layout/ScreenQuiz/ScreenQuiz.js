import React from "react";
import Question from "../../components/Question/Question";
import { getDateTimeAfter20Mins } from "../../utils/QuizService";
import "./ScreenQuiz.scss";
import CountDownTimer from "../../components/CountDownTimer/CountDownTimer";
import CustomButton from "../../components/CustomButton";
import { useLocation } from "react-router-dom";
import Title from "../../components/Title/Title";
import BigForm from "../../components/BigForm/BigForm";

export default function ScreenQuiz() {
  const location = useLocation();
  let quiz = location.state.data;
  const name = location.state.userInfo.name;
  const lzQuiz = Object.values(quiz.lsQuizz);

  return (
    <div className="ScreenQuiz">
      <header className="header">
        <Title />
        <span>You have 20 minutes to finish this test</span>
        <CountDownTimer />
      </header>

      <BigForm>
        <div className="questionList">
          {lzQuiz.map((question, index) => {
            return <Question name={name} key={index} question={question} index={index + 1} />;
          })}
        </div>

        <CustomButton linkTo={"/quiz/1/answer"} type={"primary"} text={"SUBMIT"} />
      </BigForm>
    </div>
  );
}
