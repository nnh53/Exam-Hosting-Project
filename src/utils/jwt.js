// const jwt = require("jsonwebtoken");

// export default function signToken({ payload, privateKey, options = { algorithm: "HS256", expiresIn: "1d" } }) {
//   return new Promise((resolve, reject) => {
//     jwt.sign(payload, privateKey, options, (err, token) => {
//       if (err) reject(err);
//       resolve(token);
//     });
//   });
// }

// export async function pushToServer({ email, name, user_info_token, test_id }) {
//   return fetch("http://localhost:9000/user/register", {
//     method: "POST",
//     body: { email, name, user_info_token, test_id },
//   });
// }
