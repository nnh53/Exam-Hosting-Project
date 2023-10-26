import React from 'react'
import './ScreenHome.scss'
import ScreenHomeBigForm from './ScreenHomeBigForm/ScreenHomeBigForm'
import ScreenHomeTitle from './ScreenHomeTitle/ScreenHomeTitle'

export default function ScreenHome() {
  return (
    <div className='container'>
      <ScreenHomeTitle />
      <ScreenHomeBigForm />
    </div>
  )
}
