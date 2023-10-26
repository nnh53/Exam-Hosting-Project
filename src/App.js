import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ScreenHome from './layout/ScreenHome/ScreenHome'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ScreenHome />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
