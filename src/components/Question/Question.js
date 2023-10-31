import React from "react";
import "./Question.scss";
import RadioType from "../RadioType";
import CheckboxCom from "../CheckboxCom";

export default function Question({ question, index, name, updateUserAnswers }) {
  return (
    <div className="Question">
      <h3>
        {index}. {question.content}
      </h3>
      {question.isMultiple ? (
        <CheckboxCom name={name} question={question} updateUserAnswers={updateUserAnswers} />
      ) : (
        <RadioType name={name} question={question} updateUserAnswers={updateUserAnswers} />
      )}
    </div>
  );
}
