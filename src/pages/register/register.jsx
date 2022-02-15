import { useState } from 'react'
import './register.css'
import { Link } from 'react-router-dom'

import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import { BiLogIn } from 'react-icons/bi'

export default function Register(){
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  return(
    <div className="container-register">
      <div className="header">
        <img src="/HeaderForm.png" alt="" />
      </div>

      <div className="content">
        <img src="/Logo_Planet.png" alt="" />
        <div className="form">
          <h1>Faça seu cadastro</h1>
          <div className="area-input-register">
            <input
              autocomplete="nope"
              type="text"
              className="nome-completo"
              placeholder="Nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              autocomplete="nope"
              type="text"
              className="phone"
              placeholder="Telefone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              autocomplete="nope"
              type="mail"
              className="mail"
              placeholder="Email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            <input
              autocomplete="nope"
              type="password"
              className="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className='button-login'>
              <BiLogIn size={20} className="icon"/>
              Registrar
            </button>

          </div>


          <div className="login">
            <h2>Entre na sua Conta!</h2>
            <button>
              <AiOutlineUsergroupAdd size={20} className="icon-login" /> 
              <Link to="/" className='login-button'>
                Entrar
              </Link>
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}