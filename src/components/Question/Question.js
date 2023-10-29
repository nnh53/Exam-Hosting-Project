import React from "react";
import "./Question.scss";
import RadioType from "../RadioType";
import CheckboxCom from "../CheckboxCom";

export default function Question({ question, index, name }) {
  if (question.isMutiple) {
    return (
      <div className="Question">
        <h3>
          {index}. {question.content}
        </h3>
        <CheckboxCom name={name} question={question} />
      </div>
    );
  } else {
    return (
      <div className="Question">
        <h3>
          {index}. {question.content}
        </h3>
        <RadioType name={name} question={question} />

        {/* <Checkbox onChange={onChange}>Checkbox</Checkbox>
      <Checkbox onChange={onChange}>Checkbox</Checkbox>
      <Checkbox onChange={onChange}>Checkbox</Checkbox>
      <Checkbox onChange={onChange}>Checkbox</Checkbox> */}
      </div>
    );
  }
}
