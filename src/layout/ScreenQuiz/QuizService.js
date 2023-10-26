// gọi API

const GetQuiz = async () => {
  let res = await fetch('ahihi')
  let data = await res.json()

  // lọc data theo yêu cầu đồng nghiệp
  data.splice(0, 5)

  return data
}
