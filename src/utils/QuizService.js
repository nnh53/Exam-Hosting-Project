// gọi API lấy đề thi
export const getQuiz = async (quizId) => {
  try {
    console.log(process.env.REACT_APP_API_QUESTION_URL.replace(/"/g, "").concat(quizId));
    const response = await fetch(process.env.REACT_APP_API_QUESTION_URL.replace(/"/g, "").concat(quizId));
    // check if the response is ok (disconnect from network, server is down, etc. )
    if (response.status === 200) {
      const data = await response.json();

      // Check if the response contains data
      if (Object.keys(data).length === 0) {
        console.log("Response does not contain data.");
        return null; // No data found
      }

      return data;
    }
  } catch (error) {
    return null;
  }
};

export async function pushInfoToServer(user_info) {
  console.log("pushtintoServer");
  console.log("user_info", user_info);
  return fetch("http://localhost:9050/user/register", {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    method: "POST",
    body: user_info,
  });
}

export async function checkUserinfoFromServer(user_info) {
  return fetch("http://localhost:9000/user/register", {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    method: "POST",
    body: user_info,
  });
}
