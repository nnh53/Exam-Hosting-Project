import React from 'react'
import './ScreenHome.scss'
import ScreenHomeTitle from './ScreenHomeTitle/ScreenHomeTitle'
import ScreenHomeRegister from './ScreenHomeRegister/ScreenHomeRegister'

export default function ScreenHome() {
  return (
    <div className='container'>
      <ScreenHomeTitle />
      <ScreenHomeRegister />
    </div>
  )
}
