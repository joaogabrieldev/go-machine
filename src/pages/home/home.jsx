import "./home.css";
import { FaUserCircle } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import useSWR from "swr";
import fetcher, { baseUrl } from "../../lib/fetcher";
import { useEffect, useState } from "react";
import currency from "../../lib/currency";

export default function Home() {
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState("");
  const navigation = useNavigate();

  const { data } = useSWR(baseUrl + "/posts" + filter, fetcher);
  const { data: categories } = useSWR(baseUrl + "/posts/categories", fetcher);

  function handleFilter() {
    setFilter(`?category=${category}`);
  }

  function handleLogout() {
    localStorage.removeItem("@auth_user");
    navigation("/");
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("@auth_user"));
    if (!user) {
      navigation("/");
    }
  }, [navigation]);

  return (
    <div className="container-home">
      <div className="header-home">
        <div className="links-header">
          <button className="logo">
            <Link to="/home">
              <img src="/HeaderForm.png" alt="" />
            </Link>
          </button>
          <button>
            <Link className="link-menu" to="/post">
              Anunciar
            </Link>
          </button>
          <button>
            <Link className="link-menu" to="/my_posts">
              Meus anúncios
            </Link>
          </button>
        </div>
        <div className="account">
          <button onClick={handleLogout}>Sair</button>
          <FaUserCircle size={42} color="#FFD600" />
        </div>
      </div>

      <div className="banner">
        <h1>Pesquise e encontre aqui!</h1>
        <div className="banner-options">
          <select
            className="menu-options"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories &&
              categories.map((category, index) => (
                <option
                  key={category.id}
                  value={category.id}
                  selected={index === 0}
                >
                  {category.name}
                </option>
              ))}
          </select>
          <button onClick={handleFilter}>
            <BiSearchAlt size={20} color="#000  " />
            Pesquisar
          </button>
        </div>
      </div>

      <div className="content-home">
        <div className="grid-itens">
          {data &&
            data.map((item) => (
              <div className="item-anuncio">
                <img src={item.image} alt="" />
                <div className="conteudo-anuncio">
                  <h3 className="titulo-anuncio">{item.title}</h3>
                  <p className="descricao-anuncio">{item.content}</p>
                  <div className="footer-anuncio">
                    <div className="cash">
                      <p>Preço/Dia:</p>
                      <span>{currency(item.price)}</span>
                    </div>
                    <a href={"https://wa.me/55"+item.author.phone}>
                      <button className="contact-anuncio">
                        Entrar em contato
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
