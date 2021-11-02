module.exports = (app) => {
  const register = require("./controlers/auth/register");
  const login = require("./controlers/auth/login");
  const patient = require("./controlers/patient/patient");
  const auth = require("./controlers/auth/auth");
  app.post("/register", register.createUser);
  app.post("/login", login.login);
  app.post("/addPatient", auth, patient.createPatient);
  app.put("/updatePatient/:userId", auth, patient.updatePatient);
  app.delete("/deletePatient/:userId", auth, patient.deletePatient);
  app.get("/patients", auth, patient.findAll);
  app.get("/showPatient/:userId", auth, patient.findPatient);
};
