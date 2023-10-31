import { Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../../../components/Buttons/SubmitButton";
import { useQuizContext } from "../../../components/QuizContext";
import { useAnswerContext } from "../../../components/AnswerContext";
import TestAlreadyStartNotification from "../../../components/TestAlreadyStartNotification/TestAlreadyStartNotification";
import { getQuiz } from "../../../utils/QuizService";
import { addUserInforToLs } from "../../../utils/LocalStorageManagement";
import { testTime } from "../../../constants/testTime";
import "./ScreenHomeRegister.scss";

function checkTestAlreadyStart(time) {
  console.log("time nè ");
  console.log(time);
  // if time have started => notification
  return (
    !time && (
      <div>
        <TestAlreadyStartNotification />
      </div>
    )
  );
}

const _ = require("lodash");

export default function ScreenHomeRegister() {
  const [form] = Form.useForm();
  const nav = useNavigate();
  const { quizDetail, setQuizDetail } = useQuizContext();
  const { setUserAnswers } = useAnswerContext();

  // Render the component if userTimer exists
  const notification = checkTestAlreadyStart(quizDetail.now);

  // after user submit the form
  const onFinish = async (values) => {
    // access user input data
    const { "Full Name": fullName, Email, "Test ID": testId } = values;

    // get quiz data from server
    let testQuestions;
    try {
      testQuestions = await getQuiz(testId);
    } catch (error) {
      alert("Get quiz fail");
    }

    if (testQuestions != null) {
      const userInfo = { name: fullName, email: Email, testId: testId };
      addUserInforToLs(userInfo);
      console.log("userinfo: ", userInfo);
      console.log("quizinfor: ", quizDetail.userInfo);
      console.log(_.isEqual(userInfo, quizDetail.userInfo));
      // message.success("Submit success!");
      if (!_.isEqual(userInfo, quizDetail.userInfo)) {
        const now = new Date();
        now.setMinutes(now.getMinutes() + testTime);
        setQuizDetail({});
        setUserAnswers([]); // reset userAnswers
        setQuizDetail({ ...quizDetail, now: now });
        setQuizDetail({ testQuestions: testQuestions, userInfo: userInfo, now: now });
        nav("/quiz", { state: { testQuestions, userInfo, now } });
      } else {
        console.log("ahihi2");
        nav("/quiz", {
          state: { testQuestions: quizDetail.testQuestions, userInfo: quizDetail.userInfo, now: quizDetail.now },
        });
      }
      const now = new Date();
      now.setMinutes(now.getMinutes() + testTime);
      setQuizDetail({});
      setUserAnswers([]); // reset userAnswers
      setQuizDetail({ ...quizDetail, now: now });
      setQuizDetail({ testQuestions: testQuestions, userInfo: userInfo, now: now }); //CHỖ NÀY TRUYỀN THÊM THỜI GIAN NÈ Q !!!!!!!!!!!!!
    } else {
      message.error("Test not exist!");
    }
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  return (
    <div className="ScreenHomeRegister">
      {notification}
      <Form form={form} layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
        <Form.Item
          name="Full Name"
          label="Full Name"
          rules={[
            {
              required: true,
            },
            {
              type: "string",
              min: 6,
            },
          ]}
        >
          <Input placeholder="Input your Full Name" />
        </Form.Item>

        <Form.Item
          name="Email"
          label="Email"
          rules={[
            {
              required: true,
            },
            {
              type: "email",
              min: 6,
            },
          ]}
        >
          <Input placeholder="Input your Email" />
        </Form.Item>

        <Form.Item
          name="Test ID"
          label="Test ID"
          rules={[
            {
              required: true,
            },
            {
              type: "string",
              min: 0,
            },
          ]}
        >
          <Input placeholder="Input Test ID" />
        </Form.Item>

        <Form.Item>
          <SubmitButton />
        </Form.Item>
      </Form>
    </div>
  );
}
