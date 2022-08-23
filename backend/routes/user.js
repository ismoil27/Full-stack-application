const express = require("express");
const connection = require("../connection");
const router = express.Router();
const nodemailer = require("nodemailer");

const auth = require("../services/authentication");
const checkRole = require("../services/checkRole");

const jwt = require("jsonwebtoken");
require("dotenv").config();

router.post("/signup", (req, res) => {
  let user = req.body;
  const query = "select email, password, role, status from user where email=?";
  connection.query(query, [user.email], (err, result) => {
    if (!err) {
      if (result.length <= 0) {
        const query =
          "insert into user(name, contactNumber, email, password, status, role) values(?,?,?,?, 'false', 'user') ";
        connection.query(
          query,
          [
            user.name,
            user.contactNumber,
            user.email,
            user.password,
            user.status,
          ],
          (err, result) => {
            if (!err) {
              return res
                .status(200)
                .json({ message: "Successfully registered" });
            } else {
              return res.status(500).json(err);
            }
          }
        );
      } else {
        return res.status(400).json({ message: "Email already exists" });
      }
    } else {
      return res.status(500).json(err);
    }
  });
});

router.post("/login", (req, res) => {
  const user = req.body;
  const query = "select email, password, role, status from user where email=?";
  connection.query(query, [user.email], (err, result) => {
    if (!err) {
      if (result.length <= 0 || result[0].password !== user.password) {
        return res.status(401).json({ message: `Incorrect credentials` });
      } else if (result[0].status === "false") {
        return res.status(401).json({ message: `Wait for Admin Approval` });
      } else if (result[0].password === user.password) {
        const response = { email: result[0].email, role: result[0].role };
        const accessToken = jwt.sign(response, process.env.ACCESS_TOKEN, {
          expiresIn: "8h",
        });
        res.status(200).json({ token: accessToken });
      } else {
        return res
          .status(400)
          .json({ message: `Something went wrong. Please try again` });
      }
    } else {
      return res.status(500).json(err);
    }
  });
});

// const transport = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASSWORD,
//   },
// });

// router.post('/forgotpassword', (req, res)=> {
//   const user = req.body;
//   query = 'select email, password  from user where email=?';
//   connection.query(query,[user.email], (err, result )=> {
//     if(!err){
//       if(result.length <= 0) {
//         return res.status(200).json({message: 'Password send successfully to your email'})
//       } else {
//         let mailOptions = {
//           from: process.env.EMAIL,
//           to: result[0].email,
//           subject: `Password by User management system`,
//           html: `<p> <b> Your login details fro user management system </b> </br>  <b>   </p>`
//         }
//       }
//     }else{
//       return res.status(500).json(err)
//     }
//   } )
// })

router.get("/get", (req, res) => {
  const query =
    'select id, name, email, contactNumber, status from user where role="user"';
  connection.query(query, (err, result) => {
    if (!err) {
      return res.status(200).json(result);
    } else {
      return res.status(500).json(err);
    }
  });
});

router.patch("/update", (req, res) => {
  const user = req.body;
  const query = "update user set status=? where id=?";
  connection.query(query, [user.status, user.id], (err, result) => {
    if (!err) {
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: `User id does not exist` });
      }
      return res.status(200).json({ message: `User updated successfully` });
    } else {
      return res.status(500).json(err);
    }
  });
});

router.get("/checkToken", (req, res) => {
  return res.status(200).json({ message: "true" });
});

// router.post("/changePassword", (req, res) => {});

module.exports = router;
