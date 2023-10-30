import { Radio, Space } from "antd";
import React, { useEffect, useState } from "react";
import { addItemToLS, getAnswer } from "../utils/LocalStorageManagement";
import { useAnswerContext } from "./AnswerContext";

export default function RadioType({ question, name }) {
  const { userAnswers, setUserAnswers } = useAnswerContext();

  const { id, answer, isMultiple } = question;
  //   console.log(quizId, answer)
  const [value, setValue] = useState(0);

  const onChange = (e) => {
    setValue(e.target.value);
    addItemToLS(id, e.target.value, isMultiple, name);
    setUserAnswers([...userAnswers, { id: id, answer: e.target.value }]);
  };

  useEffect(() => {
    if (getAnswer(id, name)) {
      let aId = getAnswer(id, name)[0];
      setValue(aId);
    }
  }, []);

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
        {answer.map((item, index) => (
          <Radio key={index} value={item.id}>
            {item.content}
          </Radio>
        ))}
      </Space>
    </Radio.Group>
  );
}
