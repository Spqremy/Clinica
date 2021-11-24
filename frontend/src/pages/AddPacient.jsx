import React, { useState } from "react";
import Axios from "axios";

export default function AddPacient() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [consultationdate, setConsultationdate] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");

  async function submit(e) {
    let token = localStorage.getItem("token");
    e.preventDefault();
    e.target.reset();
    try {
      const newPatient = {
        firstname,
        lastname,
        age,
        sex,
        consultationdate,
        phone,
        email,
        city,
      };
      await Axios.post("http://localhost:8080/addPatient", newPatient, {
        headers: {
          Authorization: token,
        },
      });
      console.log(newPatient);
      window.location.href = "/home";
    } catch (err) {
      console.log(err.response.data);
    }
  }

  return (
    <div>
      <form onSubmit={submit}>
        <div>Nume</div>
        <input
          type="text"
          placeholder="nume"
          onChange={(e) => setFirstname(e.target.value)}
        />
        <div>Prenume</div>
        <input
          type="text"
          placeholder="prenume"
          onChange={(e) => setLastname(e.target.value)}
        />
        <div>sex</div>
        <input
          type="text"
          placeholder="sex"
          onChange={(e) => setSex(e.target.value)}
        />
        <div>varsta</div>
        <input
          type="number"
          placeholder="varsta"
          onChange={(e) => setAge(e.target.value)}
        />
        <div>Data consultarii</div>
        <input
          type="text"
          placeholder="data consultarii"
          onChange={(e) => setConsultationdate(e.target.value)}
        />
        <div>Oras</div>
        <input
          type="text"
          placeholder="oras"
          onChange={(e) => setCity(e.target.value)}
        />
        <div>Telefon</div>
        <input
          type="number"
          placeholder="telefon"
          onChange={(e) => setPhone(e.target.value)}
        />
        <div>Email</div>
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Adauga pacient</button>
      </form>
    </div>
  );
}
