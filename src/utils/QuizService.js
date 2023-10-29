import { getStartTime, saveStartTime } from '../utils/LocalStorageManagement'

// gọi API
const API_URL = 'http://localhost:8000/api/quiz/'

export const getQuiz = async (quizId) => {
  const response = await fetch(`${API_URL}${quizId}`)

  if (response.status === 200) {
    const data = await response.json()

    // Check if the response contains data
    if (Object.keys(data).length === 0) {
      console.log('Response does not contain data.')
      return null // No data found
    }

    console.log('Data:', data)
    return data
  } else {
    console.log('Server returned an error:', response.statusText)
    return null
  }
}

export const getDateTimeAfter20Mins = () => {
  const TIME_IN_MS = 20 * 60 * 1000
  const START_TIME = getStartTime() ? getStartTime() : new Date().getTime()
  saveStartTime(START_TIME)
  return START_TIME + TIME_IN_MS
}
