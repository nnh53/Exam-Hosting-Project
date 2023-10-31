import React from "react";
import Question from "../../components/Question/Question";
import CountDownTimer from "../../components/CountDownTimer/CountDownTimer";
import CustomButton from "../../components/CustomButton";
import Title from "../../components/Title/Title";
import BigForm from "../../components/BigForm/BigForm";
import { useAnswerContext } from "../../components/AnswerContext";
import "./ScreenQuiz.scss";
import { useSelector } from "react-redux";
import { time } from "console";

export default function ScreenQuiz() {
  const { userAnswers } = useAnswerContext();

  let quiz = useSelector((state) => state.testQuestions);

  const name = useSelector((state) => state.userInfo.name);
  const nowFromRedux = useSelector((state) => state.userInfo.now);
  time = JSON.parse(nowFromRedux);
  const lzQuiz = Object.values(quiz.lsQuizz);

  const baseURL = "https://server.nglearns.com/answer/";

  // Tạo state để lưu trữ câu hỏi và câu trả lời đã chọn

  const handleSubmit = () => {
    console.log("UserAnswer:", userAnswers);
    console.log("QuizID:", quiz.id);
    // ---------------------------lấy data được rồi, giờ post thôi
    fetch(`${baseURL}${quiz.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userAnswers),
    })
      .then((response) => {
        if (response.status === 200) {
          alert("Submit successfully");
          return response.json();
        }
      })
      .then((data) => {
        if (data !== undefined) {
          alert(`Your score: ${data}`);
        } else {
          alert(`Your score: 0`);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="ScreenQuiz">
      <header className="header">
        <Title />
        <p>You have 20 minutes to finish this test</p>
        <CountDownTimer time={time} />
      </header>

      <BigForm>
        <div className="questionList">
          {lzQuiz.map((question, index) => {
            return <Question name={name} key={index} question={question} index={index + 1} />;
          })}
        </div>

        <div className="centerButton">
          <CustomButton type={"primary"} text={"SUBMIT"} onClick={handleSubmit} />
        </div>
      </BigForm>
    </div>
  );
}
