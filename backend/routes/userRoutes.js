const express = require("express");
const router = express.Router();
const { validationResult } = require("express-validator");
const { registerValidations } = require("./../validations/userValidations");
const { register } = require("./../controllers/users/usersController");

router.post("/register", registerValidations, register);

// const registerValidations = [
//     body("name").not().isEmpty().escape().trim().withMessage("name is required"),
//     body("email").isEmail().trim().withMessage("email is required"),
//     body("password")
//       .isLength({ min: 5 })
//       .trim()
//       .withMessage("password should be 5 characters long"),
// ];

// router.post("/register", registerValidations, (req, res) => {
//   //   console.log(req.body);
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     console.log(errors.array());
//   } else {
//     console.log(req.body);
//   }
// });

module.exports = router;
// https://www.youtube.com/watch?v=6F1--EkwHRI&list=PLZdXBpi-l7C7bM_rwTOcWaZv8FInVQYMz&index=4
