import React, { useState } from "react";
import Axios from "axios";
import AuthTitle from "../../components/AuthTitle/AuthTitle";
import AuthSubtitle from "../../components/AuthSubtitle/AuthSubtitle";
import AuthInput from "../../components/AuthInput/AuthInput";
import AuthButton from "../../components/AuthButton/AuthButton";
import AuthImage from "../../components/AuthImage/AuthImage";
import "./LoginPage.css";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginResponse = await Axios.post(
        "http://localhost:8080/login",
        loginUser
      );
      window.location.href = "/result";
      localStorage.setItem("token", loginResponse.data.token);
    } catch (err) {
      console.log(err);
      setMessage("Email sau parola gresite");
    }
  };
  return (
    <div className="login">
      <div className="login-left">
        <div className="login-left__container">
          <AuthTitle title="Welcome to AppName" />
          <div className="login-error__message">{message}</div>
          <form onSubmit={submit} className="login__form">
            <AuthSubtitle subtitle="Email Adress:" />
            <AuthInput
              proptype="email"
              name="email"
              propvalue={email}
              onchange={(e) => setEmail(e.target.value)}
            />
            <AuthSubtitle subtitle="Password:" />
            <AuthInput
              proptype="password"
              name="password"
              propvalue={password}
              onchange={(e) => setPassword(e.target.value)}
            />

            <AuthButton name="Log In" />
            <a className="login__ref" href="/register">
              Nu ai un cont? Inregistrare
            </a>
          </form>
        </div>
      </div>
      <div className="login-right">
        <AuthImage />
      </div>
    </div>
  );
}
