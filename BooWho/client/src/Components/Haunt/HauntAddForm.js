import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HauntForm() {
  let navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleNavigate = () => {
    navigate("/register");
  };

  const handleHomeNavigate = () => {
    navigate("/boowho");
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    login(email, password)
      .then(() => navigate("/boohome"))
      .catch(() => alert("Login Failed, Boo"));
  };

  return (
    <>
      <div className="isolate bg-spooky"></div>
    </>
  );
}
