import { getStartTime, saveStartTime } from '../../utils/LocalStorageManagement'

// gọi API
const API_URL = 'http://localhost:8000/api/quiz/'

export const GetData = async (quizId) => {
  const response = await fetch(`${API_URL}${quizId}`)
  const data = await response.json()
  return data
}

export const getDateTimeAfter20Mins = () => {
  const TIME_IN_MS = 20 * 60 * 1000
  const START_TIME = getStartTime() ? getStartTime() : new Date().getTime()
  saveStartTime(START_TIME)
  return START_TIME + TIME_IN_MS
}
