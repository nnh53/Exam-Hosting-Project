import React, { useCallback, useState } from "react";
import Question from "../../components/Question/Question";
import CountDownTimer from "../../components/CountDownTimer/CountDownTimer";
import CustomButton from "../../components/CustomButton";
import Title from "../../components/Title/Title";
import BigForm from "../../components/BigForm/BigForm";
import { useAnswerContext } from "../../components/AnswerContext";
import "./ScreenQuiz.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { clearLs } from "../../utils/LocalStorageManagement";
import { checkUserinfoFromServer } from "../../utils/QuizService";

export default function ScreenQuiz() {
  const { userAnswers } = useAnswerContext();

  let quiz = useSelector((state) => state.testQuestions);

  const name = useSelector((state) => state.userInfo.name);
  const nowFromRedux = useSelector((state) => state.userInfo.now);
  const lzQuiz = Object.values(quiz.lsQuizz);
  const [isSubmit, setIsSubmit] = useState(false);
  const nav = useNavigate();

  const baseURL = "https://server.nglearns.com/answer/";
  const userInfoFromRedux = useSelector((state) => state.userInfo);

  // Tạo state để lưu trữ câu hỏi và câu trả lời đã chọn

  const handleSubmit = () => {
    // kiểm tra xem userInfo gửi có giống trên server hay ko
    // nếu giống thì mới cho submit

    console.log("userInfoFromRedux", userInfoFromRedux);
    const respone = checkUserinfoFromServer({ user_info: userInfoFromRedux });
    console.log(respone);

    setIsSubmit(true);

    clearLs();
    // console.log("UserAnswer:", userAnswers);
    // console.log("QuizID:", quiz.id);
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
          // alert(`Your score: ${data}`);
          nav("/quiz/answer", { state: { score: data } });
        } else {
          nav("/quiz/answer", { state: { score: 0 } });
        }
      })
      .catch((error) => {
        alert("Submit failed");
        console.log("Error: ", error);
      });
  };

  const handleCountdownFinish = useCallback(() => {
    if (!isSubmit) {
      handleSubmit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmit]);

  return (
    <div className="ScreenQuiz">
      <header className="header">
        <Title />
        <p>You have 20 minutes to finish this test</p>
        <CountDownTimer time={nowFromRedux} onFinish={handleCountdownFinish} />
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
