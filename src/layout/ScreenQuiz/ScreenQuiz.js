import React, { useState } from "react";
import Question from "../../components/Question/Question";
import "./ScreenQuiz.scss";
import CountDownTimer from "../../components/CountDownTimer/CountDownTimer";
import CustomButton from "../../components/CustomButton";
import { useLocation, useNavigate } from "react-router-dom";
import Title from "../../components/Title/Title";
import BigForm from "../../components/BigForm/BigForm";

export default function ScreenQuiz() {
  const location = useLocation();

  let quiz = location.state.data;
  const name = location.state.userInfo.name;
  const lzQuiz = Object.values(quiz.lsQuizz);
  const baseURL = "https://server.nglearns.com/answer/";

  // Tạo state để lưu trữ câu hỏi và câu trả lời đã chọn
  const [userAnswers, setUserAnswers] = useState([]);
  const nav = useNavigate();
  // const answersToSubmit = [];
  const handleSubmit = () => {
    const answersToSubmit = lzQuiz.map((question, index) => {
      const questionId = question.id; // Thay "id" bằng trường dữ liệu thực tế
      const selectedAnswer = userAnswers[index]; // Lấy câu trả lời đã chọn cho câu hỏi này

      return {
        quesId: questionId,
        ansIdList: selectedAnswer,
      };
    });

    console.log(answersToSubmit);

    fetch(`${baseURL}/${quiz.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(answersToSubmit),
    }).then((response) => {
      console.log(response.json());
    });
    //   .then((data) => {
    //     nav("/quiz/1/answer", { state: { data } });
    //   });
  };

  return (
    <div className="ScreenQuiz">
      <header className="header">
        <Title />
        <p>You have 20 minutes to finish this test</p>
        <CountDownTimer />
      </header>

      <BigForm>
        <div className="questionList">
          {lzQuiz.map((question, index) => {
            return (
              <Question
                name={name}
                key={index}
                question={question}
                index={index + 1}
                setUserAnswers={(selectedAnswer) => {
                  const updatedUserAnswers = [...userAnswers];
                  updatedUserAnswers[index] = selectedAnswer;
                  console.log("Selected Answer:", selectedAnswer);
                  console.log("Updated User Answers:", updatedUserAnswers);
                  setUserAnswers(updatedUserAnswers);
                }}
              />
            );
          })}
        </div>

        <CustomButton type={"primary"} text={"SUBMIT"} onClick={handleSubmit} />
      </BigForm>
    </div>
  );
}
