import './post.css'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Post() {
  return(
    <div className="container-post">
      <div className="header-home">
        <div className="links-header">
        <button className="logo">
            <Link to="/"><img src="/HeaderForm.png" alt="" /></Link>
          </button>
          <button >
            <Link className='link-menu' to="/post">Anunciar</Link>
          </button>
          <button>
            <Link className='link-menu' to="/">Meus anuncios</Link>
          </button>
        </div>
        <div className="account">
          <button>Minha conta</button>
          <FaUserCircle size={42} color="#FFD600"/>
        </div>
      </div>
      <div className="content-post">
        <h1>Poste seu anúncio!</h1>
        <form className="form-post">
          <div className="form-left">
            <label for="title" className='title-form-input'>Título</label> 
            <input className='input-form' type="text" id="title" name="title"/>
            
            <label for="lname" className='title-form-input'>Descrição</label>
            <textarea className='input-form-area' name="lname" id="" cols="30" rows="10"></textarea>

            <label for="#" className='title-form-input'>Imagem</label>
            <input type="file" id="actual-btn" hidden/>
            <label className='input-form-image' for="actual-btn">Escolha uma imagem!</label>

            <label for="category" className='title-form-input'>Categoria</label> 
            <input className='input-form' type="text" id="category" name="category"/>
          </div>

          <div className="form-right">
            <label for="state" className='title-form-input'>Estado</label> 
            <input className='input-form' type="text" id="state" name="state"/>

            <label for="city" className='title-form-input'>Cidade</label> 
            <input className='input-form' type="text" id="city" name="city"/>

            <label for="Bairro" className='title-form-input'>Bairro</label> 
            <input className='input-form' type="text" id="Bairro" name="Bairro"/>

            <label for="cash" className='title-form-input'>Preço</label> 
            <input className='input-form' type="number" id="cash" name="cash" />

            <div className="buttons-post">
              <Link className='link-buttons' to="/home" >
                <button className='button-cancel'>
                  Cancelar
                </button>
              </Link>
              <Link className='link-buttons' to="/home" >
                <button className='button-post'>Postar</button>
              </Link>
            </div>
          </div>
        </form>
         
      </div>

      </div>
  )
}