import React from 'react'
import Question from '../../components/Question/Question'
import { GetData } from './QuizService'
import './ScreenQuiz.scss'
import SubmitButton from '../Button/SubmitButton'
import { CountDownTimer } from '../../components/CountDownTimer/CountDownTimer'

const quiz = await GetData(1)

export default function ScreenQuiz() {
  // main screen
  //Container component - luôn luôn gọi API tại main screen
  //Presentation Component - Component con nhận data
  // luôn luôn gọi api tại main screen
  // truyền data cho các component con => tái sử dụng
  // đạt chuẩn The Single Source Of Truth
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000
  const NOW_IN_MS = new Date().getTime()
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS

  return (
    <div className='ScreenQuiz'>
      <header className='quizHeader'>
        <h1>FINAL TEST</h1>
        <h3>You have 20 minutes to finish this test</h3>
      </header>
      <div className='questionList'>
        {quiz.lsQuizz.map((question, index) => {
          return <Question key={index} question={question} index={index + 1} />
        })}
      </div>
      <SubmitButton />
      <div style={{ height: 100 }}></div>
      <div>
        <h1>Countdown Timer</h1>
        <CountDownTimer targetDate={dateTimeAfterThreeDays} />
      </div>
    </div>
  )
}
