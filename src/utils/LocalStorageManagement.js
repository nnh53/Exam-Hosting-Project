// getList(): khi gọi hàm sẽ nhận đc danh sách các item  //do lưu từ localStorage
export const getList = () => {
  return JSON.parse(localStorage.getItem("user")) || [];
};

// {
//   name: "Nguyen Van A";
//   email: "test@gmail.com";
//   testId: "123456";
//   quizId: "123";
//   choice: [
//     {
//       questionId: "123",
//       ansIdList: ["123", "456"],
//     },
//     {
//       questionId: "123",
//       ansIdList: ["123", "456"],
//     },
//     {
//       questionId: "123",
//       ansIdList: ["123", "456"],
//     },
//     {
//       questionId: "123",
//       ansIdList: ["123", "456"],
//     }
//   ];
// }

// hàm lưu name, email, quizId vào localStorage
export const addUserInforToLs = (userInfo) => {
  let list = getList();
  list.push({ ...userInfo, choice: [] });
  localStorage.setItem("user", JSON.stringify(list));
};

export const clearLs = () => {
  localStorage.clear();
};

// hàm lưu đáp án người dùng chọn vào localStorage
export const addItemToLS = (quizId, ansId, isMultiple, name) => {
  // lấy list từ ls về
  let list = getList();
  let data = list.find((item) => item.name === name);
  console.log(data);
  if (isMultiple) {
    // tìm xem có quizId nào trong list chưa
    let question = data.choice.find((item) => item.questionId === quizId);
    if (question) {
      // nếu có thì thêm ansId vào quiz đó
      console.log(ansId);
      question.ansIdList.push(ansId);
    } else {
      // nếu chưa có thì tạo mới
      data.choice.push({ questionId: quizId, ansIdList: [ansId] });
    }
  } else {
    data.choice = data.choice.filter((item) => item.questionId !== quizId);
    // nhét item vào list
    data.choice.push({ questionId: quizId, ansIdList: [ansId] });
  }

  //lưu lại lên localStorage
  localStorage.setItem("user", JSON.stringify(list));
};

export const getStartTime = () => {
  return JSON.parse(localStorage.getItem("startTime")) || null;
};

export const saveStartTime = (time) => {
  localStorage.setItem("startTime", JSON.stringify(time));
};

export const getAnswer = (quizId, userName) => {
  let list = getList();
  let data = list.find((item) => item.name === userName);
  let result = data.choice.find((item) => item.questionId === quizId);
  return result ? result.ansIdList : null;
};

export const getUserInfor = () => {
  let list = getList();
  const userDetail = list[list.length - 1];
  const { name, email, testId } = userDetail;
  return { userInfo: { name, email, testId }, testQuestions: userDetail.choice };
};
