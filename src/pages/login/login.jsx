import { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import { BiLogIn } from 'react-icons/bi'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'

export default function Login(){
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');


  return(
    <div className="container-login">
      <div className="logo">
        <img src="/HeaderForm.png" alt="Logo" />
      </div>
     
      <div className="area-input">
        <input
        autocomplete="nope"
        type="text"
        className="login"
        placeholder="Email"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        />
        <input
        autocomplete="nope"
        type="password" 
        className="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      
        <button className="button-login">
          <Link className='link-button-login' to="/home" >
            <BiLogIn size={20} className="icon"/>
            Entrar
          </Link>
        </button>
      

      <div className="section-cadastro">
        <h1>Faça seu cadastro</h1>
        <button className='register-button'>
          <AiOutlineUsergroupAdd size={20} color="#FFD600"/>
          <Link to="/register" className='register-button'>
            Cadastrar
          </Link>
        </button>
      </div>
    </div>
  )
}