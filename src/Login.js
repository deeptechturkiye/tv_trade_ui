import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onLogin();
    } catch (error) {
      alert("Giriş başarısız: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 40, display: "flex", flexDirection: "column", gap: 10 }}>
      <h2>Giriş Yap</h2>
      <input type="email" placeholder="E-posta" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Şifre" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Giriş</button>
    </form>
  );
}
