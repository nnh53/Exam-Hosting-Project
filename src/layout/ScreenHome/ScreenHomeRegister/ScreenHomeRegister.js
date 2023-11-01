import { Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../../../components/Buttons/SubmitButton";
import { useAnswerContext } from "../../../components/AnswerContext";
import TestAlreadyStartNotification from "../../../components/TestAlreadyStartNotification/TestAlreadyStartNotification";
import { getQuiz } from "../../../utils/QuizService";
import { addUserInforToLs } from "../../../utils/LocalStorageManagement";
import { testTime } from "../../../constants/testTime";
import { useDispatch, useSelector } from "react-redux";
import "./ScreenHomeRegister.scss";
import store, { saveToLocalStorage } from "../../../components/ReduxStore";

function checkTestAlreadyStart(time) {
  console.log("time nè ");
  console.log(time);
  if (time != null) {
    // if time have started => notification
    return (
      <div>
        <TestAlreadyStartNotification />
      </div>
    );
  }
  return null; // Return null if time is null or undefined
}

const _ = require("lodash");

export default function ScreenHomeRegister() {
  const [form] = Form.useForm();
  const nav = useNavigate();

  const dispatch = useDispatch();

  const userInfoFromRedux = useSelector((state) => state.userInfo);
  console.log("userInfoFromRedux", userInfoFromRedux);

  const testQuestionsFromRedux = useSelector((state) => state.testQuestions);

  const { setUserAnswers } = useAnswerContext();

  // Render the component if userTimer exists
  const notification = checkTestAlreadyStart(userInfoFromRedux?.now);

  // After user submit the form
  const onFinish = async (values) => {
    // access user input data
    const { "Full Name": fullName, Email, "Test ID": testId } = values;
    const userInfo = { name: fullName, email: Email, testId: testId };

    // get quiz data from server
    let testQuestions = await getQuiz(testId);

    if (testQuestions != null) {
      // chỉ để nhìn thấy tạm
      addUserInforToLs(userInfo);

      const now = new Date();
      now.setMinutes(now.getMinutes() + testTime);
      // thêm thời gian vào userInfo
      userInfo.now = now;

      // set lên redux store
      dispatch({ type: "SET_USER_INFO", payload: { testQuestions, userInfo } });
      store.subscribe(() => {
        saveToLocalStorage(store.getState());
      });

      // nếu user input khác trên redux store --> set lại user mới
      if (!_.isEqual(userInfo, userInfoFromRedux)) {
        const nowNew = new Date();
        nowNew.setMinutes(now.getMinutes() + testTime);
        setUserAnswers([]); // reset userAnswers
        nav("/quiz", { state: { testQuestions, userInfo, nowNew } });
      } else {
        // nếu là người dùng cũ nhưng mà đăng nhập
        nav("/quiz", {
          state: { testQuestions: testQuestionsFromRedux, userInfo: userInfoFromRedux, now: userInfoFromRedux.now },
        });
      }

      setUserAnswers([]); // reset userAnswers
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
          <Input placeholder="Input your Full Name" size="large" />
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
          <Input placeholder="Input your Email" size="large" />
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
          <Input placeholder="Input Test ID" size="large" />
        </Form.Item>

        <Form.Item>
          <SubmitButton />
        </Form.Item>
      </Form>
    </div>
  );
}
