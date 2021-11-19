import React from "react";
import Doctor from "../../assets/doctor.jpg";
import "./AuthImage.css";
export default function AuthImage() {
  return (
    <div>
      <img className="auth-image" src={Doctor} alt="No image foung" />
    </div>
  );
}
