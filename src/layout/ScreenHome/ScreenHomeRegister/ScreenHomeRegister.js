import { Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import "./ScreenHomeRegister.scss";
import SubmitButton from "../../../components/Buttons/SubmitButton";
import { getQuiz } from "../../../utils/quizService";
import { addUserInforToLs } from "../../../utils/LocalStorageManagement";

const App = () => {
  const [form] = Form.useForm();
  const nav = useNavigate();

  const onFinish = async (values) => {
    // Access the user input data here
    console.log(values);
    const { "Full Name": fullName, Email, "Test ID": testId } = values;
    const data = await getQuiz(testId);

    if (data != null) {
      const userInfo = { name: fullName, email: Email, testId: testId };
      addUserInforToLs(userInfo);
      // message.success("Submit success!");
      const now = new Date().getMinutes();

      nav("/quiz", { state: { data, userInfo }, start_time: { now } }); //CHỖ NÀY TRUYỀN THÊM THỜI GIAN NÈ Q !!!!!!!!!!!!!
    } else {
      message.error("Test not exist!");
    }
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  return (
    <div className="ScreenHomeRegister">
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
};
export default App;
