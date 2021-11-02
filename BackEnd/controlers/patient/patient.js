const Patient = require("../../models/patientModel");
const User = require("../../models/userModel");

exports.findPatient = async (req, res) => {
  const userId = req.params.userId;
  try {
    const exists = await Patient.findOne({
      where: {
        id: userId,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    if (exists) {
      res.json({ exists });
    } else {
      res.status(200).send({
        message: `user with id ${userId} was not found!`,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

exports.deletePatient = async (req, res) => {
  const userId = req.params.userId;
  if (!userId) {
    return res.status(404).send({ msg: "User not found" });
  } else
    await Patient.destroy({
      where: { id: userId },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "User was deleted successfully!",
          });
        } else {
          res.status(200).send({
            message: `user with id=${userId} was not found!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Could not delete user with id=" + id,
        });
      });
};
exports.findAll = async (req, res) => {
  try {
    const currentUser = await User.findOne({
      where: { token: req.header("Authorization") },
    });
    const { id } = currentUser.dataValues;

    const patients = await Patient.findAll({
      where: { userId: id },
    });

    return res.status(200).send(patients);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

exports.createPatient = async (req, res) => {
  try {
    const { firstname, lastname, sex, age, consultationdate, city, phone } =
      req.body;
    console.log(typeof firstname);
    const currentUser = await User.findOne({
      where: { token: req.header("Authorization") },
    });
    console.log(currentUser);
    const newPatient = new Patient({
      firstname,
      lastname,
      sex,
      age,
      consultationdate,
      city,
      phone,
      userId: currentUser.id,
    });
    await newPatient.save();
    res.json({ newPatient });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
exports.updatePatient = async (req, res) => {
  try {
    let patient = {};
    const dontmodify = await Patient.findOne({
      where: { id: req.params.userId },
    });
    patient = {
      firstname: req.body.firstname || dontmodify.firstname,
      lastname: req.body.lastname || dontmodify.lastname,
      age: req.body.age || dontmodify.age,
      city: req.body.city || dontmodify.city,
      sex: req.body.sex || dontmodify.sex,
      phone: req.body.phone || dontmodify.phone,
      consultationdate:
        req.body.consultationdate || dontmodify.consultationdate,
    };
    console.log(dontmodify);

    try {
      await Patient.update(patient, {
        where: { id: req.params.userId },
      });
      res.status(200).send("updated");
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    res.status(404).send(msg.err);
  }
};
