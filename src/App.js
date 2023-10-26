import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ScreenHome from './layout/ScreenHome/ScreenHome'
import ScreenQuiz from './layout/ScreenQuiz/ScreenQuiz'

function App() {
  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ScreenHome />} />
          <Route path='/quiz' element={<ScreenQuiz />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
