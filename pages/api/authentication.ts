// import jwt from "jsonwebtoken";
// import { NextApiRequest, NextApiResponse } from "next";

// export default async function handle(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { method } = req;
//   const { username, password } = req.body;
//   if (!username || !password)
//     res.status(401).json({ message: "invalid username and passwowd" });

//   // function for calling the access token
//   const accessFunc = async () => {
//     await jwt.sign({ username: username }, process.env.ACCESS_TOKEN_SECRET, {
//       expiresIn: 60 * 12,
//     });
//   };

//   //   function for calling the refresh token
//   const refreshFunc = async () => {
//     await jwt.sign({ username: username }, process.env.ACCESS_TOKEN_SECRET, {
//       expiresIn: 60 * 24 * 7,
//     });
//   };

//   if (method === "POST") {
//     if (req.query?.signup) {
//       // register user
//     } else {
//       const isValid = username && password;

//       await accessFunc();
//       await refreshFunc();
//       res.json("User successfully logged in");
//     }
//     res.status(401).json({ message: "UNATHORIZED" });
//   }
// }
