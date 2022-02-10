const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/envConfig");

module.exports.hashedPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);
  return hashed;
};

module.exports.createToken = (user) => {
  return jwt.sign(user, JWT_SECRET, {
    expiresIn: "7d",
  });

  // jwt.sign({ id: user._id, name: user.name }, JWT_SECRET, {
  //   expiresIn: "7d",
  // })
};
