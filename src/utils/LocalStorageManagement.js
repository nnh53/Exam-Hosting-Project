// getList(): khi gọi hàm sẽ nhận đc danh sách các item  //do lưu từ localStorage
export const getList = () => {
  return JSON.parse(localStorage.getItem('userChoice')) || []
}

export const addItemToLS = (quizId, ansId, isMutiple) => {
  // lấy list từ ls về
  let list = getList()
  if (isMutiple) {
    // tìm xem có quizId nào trong list chưa
    let quiz = list.find((item) => item.quizId === quizId)
    if (quiz) {
      // nếu có thì thêm ansId vào quiz đó
      console.log(ansId)
      quiz.ansIdList.push(ansId)
    } else {
      // nếu chưa có thì tạo mới
      list.push({ quizId, ansIdList: [ansId] })
    }
  } else {
    list = list.filter((item) => item.quizId !== quizId)
    // nhét item vào list
    list.push({ quizId, ansIdList: [ansId] })
  }

  //lưu lại lên localStorage
  localStorage.setItem('userChoice', JSON.stringify(list))
}

export const getStartTime = () => {
  return JSON.parse(localStorage.getItem('startTime')) || null
}

export const saveStartTime = (time) => {
  localStorage.setItem('startTime', JSON.stringify(time))
}

export const getAnswer = (quizId) => {
  let list = getList()
  let quiz = list.find((item) => item.quizId === quizId)
  return quiz ? quiz.ansIdList : null
}
