const User = require("../../models/userModel");
var bcrypt = require("bcryptjs");
exports.createUser = async (req, res) => {
  try {
    const { samepass, email, password } = req.body;
    const emailexists = await User.findOne({
      where: { email: req.body.email },
    });
    if (samepass != password)
      return res.status(400).json({ msg: "Password must be the same" });
    if (emailexists)
      return res.status(400).json({ msg: "This email already exists" });

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new User({
      email,
      password: passwordHash,
    });
    await newUser.save();
    res.json({ newUser });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
