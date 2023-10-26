// gọi API

export const GetData = async (quizId) => {
  const response = await fetch(`http://localhost:1880/quizz/${quizId}`)
  const data = await response.json()
  return data
}
