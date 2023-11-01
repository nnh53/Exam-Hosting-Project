import React, { useEffect, useState } from "react";
import { Checkbox } from "antd";
import { addItemToLS, getAnswer } from "../utils/LocalStorageManagement";
import { useAnswerContext } from "./AnswerContext";

export default function CheckboxCom({ question, name }) {
  const { userAnswers, setUserAnswers } = useAnswerContext();
  const { id, answer, isMultiple } = question;
  const [selectedValues, setSelectedValues] = useState([]);
  const onChange = (e) => {
    const selectedValue = e.target.value;
    const checked = e.target.checked;
    let updatedSelectedValues;
    if (checked) {
      // Nếu đã chọn, thêm giá trị vào mảng selectedValues
      updatedSelectedValues = [...selectedValues, selectedValue];
    } else {
      // Nếu bỏ chọn, loại bỏ giá trị khỏi mảng selectedValues
      console.log("vô rồi nè");
      updatedSelectedValues = selectedValues.filter((item) => item !== selectedValue);
    }
    setSelectedValues(updatedSelectedValues);
    addItemToLS(id, selectedValue, isMultiple, name);
    if (userAnswers) {
      let index = userAnswers.findIndex((item) => item.id === id);
      if (index !== -1) {
        userAnswers.splice(index, 1);
      }
    }
    setUserAnswers([...userAnswers, { quesId: id, answerId: updatedSelectedValues }]);
    console.log(selectedValues);
  };
  useEffect(() => {
    let ansList = getAnswer(id, name);
    if (ansList) {
      setSelectedValues([...ansList]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {answer.map((item, index) => (
        <div style={{ margin: "10px 0" }} key={index}>
          <Checkbox value={item.id} checked={selectedValues.includes(item.id)} onChange={onChange}>
            {item.content}
          </Checkbox>
        </div>
      ))}
    </div>
  );
}
