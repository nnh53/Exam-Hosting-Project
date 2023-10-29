import React, { useEffect, useState } from "react";
import { Checkbox } from "antd";
import { addItemToLS, getAnswer } from "../utils/localStorageManagement";

export default function CheckboxCom({ question }) {
  const { id, answer, isMutiple } = question;
  const [selectedValues, setSelectedValues] = useState([]);
  const onChange = (e) => {
    const selectedValue = e.target.value;
    const checked = e.target.checked;
    if (checked) {
      // Nếu đã chọn, thêm giá trị vào mảng selectedValues
      setSelectedValues([...selectedValues, selectedValue]);
    } else {
      // Nếu bỏ chọn, loại bỏ giá trị khỏi mảng selectedValues
      setSelectedValues(selectedValues.filter((value) => value !== selectedValue));
    }
    addItemToLS(id, e.target.value, isMutiple);
  };
  useEffect(() => {
    let ansList = getAnswer(id);
    if (ansList) {
      setSelectedValues([...ansList]);
    }
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
