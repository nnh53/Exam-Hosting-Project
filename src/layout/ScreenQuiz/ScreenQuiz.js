import React from 'react'
import Question from '../../components/Question'
import { GetData } from './QuizService'
import './ScreenQuiz.scss'

const quiz = await GetData(1)

export default function ScreenQuiz() {
  // main screen
  //Container component - luôn luôn gọi API tại main screen
  //Presentation Component - Component con nhận data
  // luôn luôn gọi api tại main screen
  // truyền data cho các component con => tái sử dụng
  // đạt chuẩn The Single Source Of Truth

  return (
    <div className='ScreenQuiz'>
      <div className='questionList'>
        {quiz.lsQuizz.map((question, index) => {
          return <Question key={index} question={question} index={index + 1} />
        })}
      </div>
    </div>
  )
}
