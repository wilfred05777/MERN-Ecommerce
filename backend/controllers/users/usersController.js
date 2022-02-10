const { validationResult } = require("express-validator");
// const jwt = require("jsonwebtoken");
// const { JWT_SECRET } = require("../../config/envConfig");
const UserModel = require("../../models/User");

const {
  hashedPassword,
  createToken,
  comparedPassword,
} = require("../../services/authServices");

// @route POST /api/register
// @access Public
// @desc Create user and return a token
module.exports.register = async (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    // console.log(errors.array());
    const { name, email, password } = req.body;
    try {
      const emailExist = await UserModel.findOne({ email });
      if (!emailExist) {
        const hashed = await hashedPassword(password);
        const user = await UserModel.create({
          name,
          email,
          password: hashed,
          //   admin: true,
        });
        const token = createToken({ id: user._id, name: user.name });
        // const token = jwt.sign({ id: user._id, name: user.name }, JWT_SECRET, {
        //   expiresIn: "7d",
        // });
        return res
          .status(201)
          .json({ msg: "Your Account has been created!", token });
      } else {
        /// email already taken
        return res
          .status(401)
          .json({ errors: [{ msg: `${email} is already taken` }] });
      }
    } catch (error) {
      console.log(error.message);
      return res.status(500).json("Server Internal error!");
    }
  } else {
    // console.log(req.body);
    // validations failed
    return res.status(400).json({ errors: errors.array() });
  }
};

// @route POST /api/login
// @access Public
// @desc Login user and return a token
module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  const error = validationResult(req);

  if (error.isEmpty()) {
    try {
      const user = await UserModel.findOne({ email });

      if (user) {
        if (await comparedPassword(password, user.password)) {
          const token = createToken({ id: user._id, name: user.name });
          if (user.admin) {
            return res.status(201).json({ token, admin: true });
          } else {
            return res.status(201).json({ token, admin: false });
          }
        } else {
          return res
            .status(401)
            .json({ errors: [{ msg: "password not matched" }] });
        }
      } else {
        return res
          .status(401)
          .json({ errors: [{ msg: `${email} is not foud` }] });
      }
    } catch (error) {
      console.log(error.message);
      return res.status(500).json("Sever internal error");
    }
  } else {
    // validation failed
    return res.status(401).json({ errors: error.array() });
  }
};
