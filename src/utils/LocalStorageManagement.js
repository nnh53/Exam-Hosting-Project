// getList(): khi gọi hàm sẽ nhận đc danh sách các item  //do lưu từ localStorage
export const getList = () => {
  return JSON.parse(localStorage.getItem('userChoice')) || []
}

export const addItemToLS = (quizId, ansId) => {
  // lấy list từ ls về
  let list = getList()
  list = list.filter((item) => item.quizId !== quizId)
  // nhét item vào list
  list.push({ quizId, ansId })
  //lưu lại lên localStorage
  localStorage.setItem('userChoice', JSON.stringify(list))
}
