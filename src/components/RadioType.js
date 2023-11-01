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

    if (userAnswers) {
      let index = userAnswers.findIndex((item) => item.quesId === id);
      if (index !== -1) {
        userAnswers.splice(index, 1);
      }
    }
    setUserAnswers([...userAnswers, { quesId: id, answerId: e.target.value }]);
  };

  useEffect(() => {
    if (getAnswer(id, name)) {
      let aId = getAnswer(id, name)[0];
      setValue(aId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
