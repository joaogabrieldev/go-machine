import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { BiLogIn } from "react-icons/bi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import fetcher, { baseUrl } from "../../lib/fetcher";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetcher(baseUrl + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user,
        password,
      }),
    })
      .then((data) => {
        if (data.accessToken) {
          navigate("/home");
          localStorage.setItem(
            "@auth_user",
            JSON.stringify({
              email: user,
              password,
              ...data,
            })
          );
        }
      })
      .catch(() => {
        alert("Erro no login!");
      });
  }

  return (
    <form onSubmit={handleSubmit} className="container-login">
      <div className="logo">
        <img src="/HeaderForm.png" alt="Logo" />
      </div>

      <div className="area-input">
        <input
          autocomplete="nope"
          type="email"
          className="login"
          placeholder="Email"
          value={user}
          required
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          autocomplete="nope"
          type="password"
          className="password"
          placeholder="Senha"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="button-login">
        <BiLogIn size={20} className="icon" />
        Entrar
      </button>

      <div className="section-cadastro">
        <h1>Faça seu cadastro</h1>
        <button onClick={e => e.preventDefault()} className="register-button">
          <AiOutlineUsergroupAdd size={20} color="#FFD600" />
          <Link to="/register" className="register-button">
            Cadastrar
          </Link>
        </button>
      </div>
    </form>
  );
}
