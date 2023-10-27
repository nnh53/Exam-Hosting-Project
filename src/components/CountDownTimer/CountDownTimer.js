import React from 'react'
import { useCountdown } from './CountDown'
import ExpiredNotice from './ExpiredNotice'
import ShowCounter from './ShowCounter '

export const CountDownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate)

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />
  } else {
    return <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />
  }
}
