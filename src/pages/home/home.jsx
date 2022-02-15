import './home.css'
import { FaUserCircle } from 'react-icons/fa'
import { BiSearchAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export default function Home(){
  return(
    <div className="container-home">
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

      <div className="banner">
        <h1>Pesquise e encontre aqui!</h1>
        <div className="banner-options">
          <select name="machine" className='menu-options'>
            <option value="1">Colhedora de cana</option>
            <option value="2">Pulverizador</option>
            <option value="3">Plantadeira</option>
            <option value="4">Colheitadeira</option>
            <option value="4">Podador</option>
            <option value="4">Arado</option>
            <option value="4">Trator</option>
          </select>
          <button>
            <BiSearchAlt size={20} color="#000  "/>
            Pesquisar
          </button>
        </div>
      </div>

      <div className="content-home">
        <div className="grid-itens">

        <div className="item-anuncio">
            <img src="/image-trator.png" alt="" />
            <div className="conteudo-anuncio">
              <h3 className="titulo-anuncio">
                Tratorzao
              </h3>
              <p className="descricao-anuncio">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis cupiditate itaque ratione eligendi, omnis nemo, optio tempora alias aut commodi exercitationem blanditiis, eum dolor suscipit in. Eos sunt similique id!
              </p>
              <div className="footer-anuncio">

                <div className="cash">
                  <p>Preço/Dia:</p>
                  <span>R$240,00</span>
                </div>

                <button className="contact-anuncio">
                  Entrar em contato
                </button>
              </div>
            </div>
          </div>

          <div className="item-anuncio">
            <img src="/image-trator.png" alt="" />
            <div className="conteudo-anuncio">
              <h3 className="titulo-anuncio">
                Tratorzao
              </h3>
              <p className="descricao-anuncio">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis cupiditate itaque ratione eligendi, omnis nemo, optio tempora alias aut commodi exercitationem blanditiis, eum dolor suscipit in. Eos sunt similique id!
              </p>
              <div className="footer-anuncio">

                <div className="cash">
                  <p>Preço/Dia:</p>
                  <span>R$240,00</span>
                </div>

                <button className="contact-anuncio">
                  Entrar em contato
                </button>
              </div>
            </div>
          </div>

          <div className="item-anuncio">
            <img src="/image-trator.png" alt="" />
            <div className="conteudo-anuncio">
              <h3 className="titulo-anuncio">
                Tratorzao
              </h3>
              <p className="descricao-anuncio">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis cupiditate itaque ratione eligendi, omnis nemo, optio tempora alias aut commodi exercitationem blanditiis, eum dolor suscipit in. Eos sunt similique id!
              </p>
              <div className="footer-anuncio">

                <div className="cash">
                  <p>Preço/Dia:</p>
                  <span>R$240,00</span>
                </div>

                <button className="contact-anuncio">
                  Entrar em contato
                </button>
              </div>
            </div>
          </div>

          <div className="item-anuncio">
            <img src="/image-trator.png" alt="" />
            <div className="conteudo-anuncio">
              <h3 className="titulo-anuncio">
                Tratorzao
              </h3>
              <p className="descricao-anuncio">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis cupiditate itaque ratione eligendi, omnis nemo, optio tempora alias aut commodi exercitationem blanditiis, eum dolor suscipit in. Eos sunt similique id!
              </p>
              <div className="footer-anuncio">

                <div className="cash">
                  <p>Preço/Dia:</p>
                  <span>R$240,00</span>
                </div>

                <button className="contact-anuncio">
                  Entrar em contato
                </button>
              </div>
            </div>
          </div>

          <div className="item-anuncio">
            <img src="/image-trator.png" alt="" />
            <div className="conteudo-anuncio">
              <h3 className="titulo-anuncio">
                Tratorzao
              </h3>
              <p className="descricao-anuncio">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis cupiditate itaque ratione eligendi, omnis nemo, optio tempora alias aut commodi exercitationem blanditiis, eum dolor suscipit in. Eos sunt similique id!
              </p>
              <div className="footer-anuncio">

                <div className="cash">
                  <p>Preço/Dia:</p>
                  <span>R$240,00</span>
                </div>

                <button className="contact-anuncio">
                  Entrar em contato
                </button>
              </div>
            </div>
          </div>

          <div className="item-anuncio">
            <img src="/image-trator.png" alt="" />
            <div className="conteudo-anuncio">
              <h3 className="titulo-anuncio">
                Tratorzao
              </h3>
              <p className="descricao-anuncio">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis cupiditate itaque ratione eligendi, omnis nemo, optio tempora alias aut commodi exercitationem blanditiis, eum dolor suscipit in. Eos sunt similique id!
              </p>
              <div className="footer-anuncio">

                <div className="cash">
                  <p>Preço/Dia:</p>
                  <span>R$240,00</span>
                </div>

                <button className="contact-anuncio">
                  Entrar em contato
                </button>
              </div>
            </div>
          </div>

          <div className="item-anuncio">
            <img src="/image-trator.png" alt="" />
            <div className="conteudo-anuncio">
              <h3 className="titulo-anuncio">
                Tratorzao
              </h3>
              <p className="descricao-anuncio">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis cupiditate itaque ratione eligendi, omnis nemo, optio tempora alias aut commodi exercitationem blanditiis, eum dolor suscipit in. Eos sunt similique id!
              </p>
              <div className="footer-anuncio">

                <div className="cash">
                  <p>Preço/Dia:</p>
                  <span>R$240,00</span>
                </div>

                <button className="contact-anuncio">
                  Entrar em contato
                </button>
              </div>
            </div>
          </div>

          <div className="item-anuncio">
            <img src="/image-trator.png" alt="" />
            <div className="conteudo-anuncio">
              <h3 className="titulo-anuncio">
                Tratorzao
              </h3>
              <p className="descricao-anuncio">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis cupiditate itaque ratione eligendi, omnis nemo, optio tempora alias aut commodi exercitationem blanditiis, eum dolor suscipit in. Eos sunt similique id!
              </p>
              <div className="footer-anuncio">

                <div className="cash">
                  <p>Preço/Dia:</p>
                  <span>R$240,00</span>
                </div>

                <button className="contact-anuncio">
                  Entrar em contato
                </button>
              </div>
            </div>
          </div>

          <div className="item-anuncio">
            <img src="/image-trator.png" alt="" />
            <div className="conteudo-anuncio">
              <h3 className="titulo-anuncio">
                Tratorzao
              </h3>
              <p className="descricao-anuncio">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis cupiditate itaque ratione eligendi, omnis nemo, optio tempora alias aut commodi exercitationem blanditiis, eum dolor suscipit in. Eos sunt similique id!
              </p>
              <div className="footer-anuncio">

                <div className="cash">
                  <p>Preço/Dia:</p>
                  <span>R$240,00</span>
                </div>

                
                <button className="contact-anuncio">
                  Entrar em contato
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  )
}