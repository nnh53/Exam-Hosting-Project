import React from "react";
import Question from "../../components/Question/Question";
import "./ScreenQuiz.scss";
import CountDownTimer from "../../components/CountDownTimer/CountDownTimer";
import CustomButton from "../../components/CustomButton";
import Title from "../../components/Title/Title";
import BigForm from "../../components/BigForm/BigForm";
import { useAnswerContext } from "../../components/AnswerContext";
import { useQuizContext } from "../../components/QuizContext";

export default function ScreenQuiz() {
  const { userAnswers } = useAnswerContext();

  const { quizDetail } = useQuizContext();

  let quiz = quizDetail.testQuestions;

  const name = quizDetail.userInfo.name;

  const lzQuiz = Object.values(quiz.lsQuizz);

  // const baseURL = "https://server.nglearns.com/answer/";

  // Tạo state để lưu trữ câu hỏi và câu trả lời đã chọn

  const handleSubmit = () => {
    console.log("UserAnswer:", userAnswers);
    // ---------------------------lấy data được rồi, giờ post thôi
    // fetch(`${baseURL}/${quiz.id}`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(answersToSubmit),
    // }).then((response) => {
    //   console.log(response.json());
    // });
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
            return <Question name={name} key={index} question={question} index={index + 1} />;
          })}
        </div>

        <CustomButton type={"primary"} text={"SUBMIT"} onClick={handleSubmit} />
      </BigForm>
    </div>
  );
}
