import React, { useState } from "react";
import Axios from "axios";
import AuthTitle from "../../components/AuthTitle/AuthTitle";
import AuthSubtitle from "../../components/AuthSubtitle/AuthSubtitle";
import AuthInput from "../../components/AuthInput/AuthInput";
import AuthButton from "../../components/AuthButton/AuthButton";
import AuthImage from "../../components/AuthImage/AuthImage";
import "./RegisterPage.css";
export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [samepass, setSamepass] = useState("");
  const [message, setMessage] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    try {
      const newUser = { email, password, samepass };
      await Axios.post("http://localhost:8080/register", newUser);
      const loginResponse = await Axios.post("http://localhost:8080/login", {
        email,
        password,
      });

      window.location.href = "/result";
      localStorage.setItem("token", loginResponse.data.token);
    } catch (err) {
      if (password.length < 5) {
        setMessage("Parola trebuie sa contina cel putin 5 caractere");
      } else if (samepass != password) {
        setMessage("Parolele trebuie sa corespunda");
      } else if (err) {
        setMessage("Email este deja utilizat");
      } else {
        setMessage("");
      }
    }
  };
  return (
    <div>
      <AuthTitle title="Register to AppName" />
      <div className="register-error">{message}</div>
      <form onSubmit={submit}>
        <AuthSubtitle subtitle="Email" />
        <AuthInput
          proptype="email"
          name="email"
          propvalue={email}
          onchange={(e) => setEmail(e.target.value)}
        />
        <AuthSubtitle subtitle="Password" />
        <AuthInput
          proptype="password"
          name="password"
          propvalue={password}
          onchange={(e) => setPassword(e.target.value)}
        />
        <AuthSubtitle subtitle="Password again" />
        <AuthInput
          proptype="password"
          name="password"
          propvalue={samepass}
          onchange={(e) => setSamepass(e.target.value)}
        />
        <AuthButton name="Register" />
        <a className="login-ref" href="/login">
          Ai deja un cont? Logheaza-te
        </a>
      </form>
      <AuthImage />
    </div>
  );
}
