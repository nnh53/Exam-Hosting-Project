// gọi API
const API_URL = 'http://localhost:8000/api/quiz/'

export const GetData = async (quizId) => {
  const response = await fetch(`${API_URL}${quizId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json()
  return data
}
