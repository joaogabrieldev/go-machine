import "./post.css";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useSWR from "swr";
import fetcher, { baseUrl } from "../../lib/fetcher";
import currency from "../../lib/currency";
import { useEffect } from "react";

export default function MyPosts() {
  const user = JSON.parse(localStorage.getItem("@auth_user"));
  const navigation = useNavigate();

  const { data: posts, mutate } = useSWR(
    baseUrl + "/posts/my?user=" + user.email,
    fetcher
  );

  function handleLogout() {
    localStorage.removeItem("@auth_user");
    navigation("/");
  }

  async function handleAlugar(post) {
    try {
      await fetcher(baseUrl + "/posts/alugar/"+post.id, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          published: !post.published,
        }),
      });
      mutate();
    } catch {
      alert("Erro ao alugar!");
    }
  }

  async function handleRemove(post) { 
    try {
      await fetcher(baseUrl + "/posts/"+post.id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
      });
      mutate();
    } catch {
      alert("Erro ao alugar!");
    }
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("@auth_user"));
    if (!user) {
      navigation("/");
    }
  }, [navigation]);

  return (
    <div className="container-post">
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
      <div className="content-post">
        <br />
        <br />
        {posts &&
          posts.map((post) => (
            <div className="post-item">
              <div className="post-info">
                <div className="post-image">
                  <img src={post.image} alt="" />
                </div>
                <div className="post-title">
                  <h2>{post.title}</h2>
                  <span>
                    Status: {post.published ? "Disponível" : "Alugado"} <br />
                    Preço: {currency(post.price)} <br />
                  </span>
                </div>
              </div>
              <div>
                <button onClick={ () => handleAlugar(post)} className="button-post">
                  {post.published ? "Alugar" : "Disponível"}
                </button>
                <button onClick={ () => handleRemove(post)} className="button-post">
                  Remover
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
