const User = require("../../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.login = async (req, res) => {
  const user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });

  if (!user) {
    return res.status(403).send({ message: "Email not found " });
  }

  var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
  if (!passwordIsValid) {
    return res.status(401).send({
      message: "Invalid Password!",
    });
  }
  user.token = createAccessToken({ id: user.id });
  await user.save();
  delete user.dataValues.password;
  return res.status(200).send(user);
};

const createAccessToken = (user) => {
  return jwt.sign(user, "key", { expiresIn: "7d" });
};
