import React from 'react'
import Question from '../../components/Question'
import { GetData, getDateTimeAfter20Mins } from './QuizService'
import './ScreenQuiz.scss'
import { CountDownTimer } from '../../components/CountDownTimer/CountDownTimer'
import CustomButton from '../../components/CustomButton'

const quiz = await GetData(1)

export default function ScreenQuiz() {
  // main screen
  //Container component - luôn luôn gọi API tại main screen
  //Presentation Component - Component con nhận data
  // luôn luôn gọi api tại main screen
  // truyền data cho các component con => tái sử dụng
  // đạt chuẩn The Single Source Of Truth

  const dateTimeAfter20Mins = getDateTimeAfter20Mins()

  return (
    <div className='ScreenQuiz'>
      <header className='quizHeader'>
        <h1>FINAL TEST</h1>
        <h3>You have 20 minutes to finish this test</h3>
        <div>
          <CountDownTimer targetDate={dateTimeAfter20Mins} />
        </div>
      </header>
      <div className='questionList'>
        {quiz.lsQuizz.map((question, index) => {
          return <Question key={index} question={question} index={index + 1} />
        })}
      </div>
      <CustomButton linkTo={'/quiz/1/answer'} type={'primary'} text={'SUBMIT'} />
      <div style={{ height: 100 }}></div>
    </div>
  )
}
