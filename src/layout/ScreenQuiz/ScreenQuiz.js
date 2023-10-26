import React from 'react'
import Question from '../../components/Question'

const testQuestion = {
  content: "World's Greatest Lover, The",
  quizId: 'b3927f3e-2524-48a1-93ce-3522c1dbc2fa',
  isMutiple: false,
  answer: [
    { ansId: '473cd947-42ac-4a3e-8392-73632e43d2ee', content: 'Business Systems Development Analyst', isCorrect: true },
    { ansId: '317e707d-0351-4dea-a61d-0f144532183b', content: 'Research Associate', isCorrect: false },
    { ansId: '8c7288d7-4b21-466e-ac64-c7ca1d085214', content: 'Quality Engineer', isCorrect: false },
    { ansId: '3047b556-bf72-4d57-8fd6-b2a787006678', content: 'Senior Financial Analyst', isCorrect: false }
  ]
}

export default function ScreenQuiz() {
  // main screen
  //Container component - luôn luôn gọi API tại main screen
  //Presentation Component - Component con nhận data
  // luôn luôn gọi api tại main screen
  // truyền data cho các component con => tái sử dụng
  // đạt chuẩn The Single Source Of Truth

  return (
    <div className='ScreenQuiz'>
      <Question question={testQuestion} index={1} />
    </div>
  )
}
