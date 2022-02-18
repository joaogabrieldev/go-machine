import "./post.css";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import fetcher, { baseUrl } from "../../lib/fetcher";
import useSWR from "swr";

export default function Post() {
  const { data: categories, error } = useSWR(
    baseUrl + "/posts/categories",
    fetcher
  );

  const navigation = useNavigate();
  const user = JSON.parse(localStorage.getItem("@auth_user"));

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);

  function handleLogout() {
    localStorage.removeItem("@auth_user");
    navigation("/");
  }

  function handleReset() {
    setTitle("");
    setContent("");
    setImage("");
    setCity("");
    setUf("");
    setNeighborhood("");
    setPrice("");
    setCategory(null);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const data = await fetcher(baseUrl + "/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
          image,
          city,
          state: uf,
          neighborhood,
          price,
          category: {
            connect: {
              id: category,
            },
          },
          author: {
            connect: {
              email: user.email,
            },
          },
        }),
      });
      handleReset();
      if (data.id) {
        alert("Cadastro realizado com sucesso!");
      }
    } catch {
      alert("Erro no cadastro!");
    }
  }

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
        <h1>Poste seu anúncio!</h1>
        <form onSubmit={handleSubmit} className="form-post">
          <div className="form-left">
            <label for="title" className="title-form-input">
              Título
            </label>
            <input
              className="input-form"
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label for="lname" className="title-form-input">
              Descrição
            </label>
            <textarea
              className="input-form-area"
              name="lname"
              id=""
              cols="30"
              rows="10"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>

            {/* <label for="#" className="title-form-input">
              Imagem
            </label>
            <input type="file" id="actual-btn" hidden />
            <label className="input-form-image" for="actual-btn">
              Escolha uma imagem!
            </label> */}
            <label for="Bairro" className="title-form-input">
              Imagem
            </label>
            <input
              className="input-form"
              type="text"
              id="Imagem"
              name="Imagem"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />

            <label for="category" className="title-form-input">
              Categoria
            </label>
            <select
              className="menu-options"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories &&
                categories.map((category, index) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
            </select>
          </div>

          <div className="form-right">
            <label for="state" className="title-form-input">
              Estado
            </label>
            <input
              className="input-form"
              type="text"
              id="state"
              name="state"
              value={uf}
              onChange={(e) => setUf(e.target.value)}
            />

            <label for="city" className="title-form-input">
              Cidade
            </label>
            <input
              className="input-form"
              type="text"
              id="city"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <label for="Bairro" className="title-form-input">
              Bairro
            </label>
            <input
              className="input-form"
              type="text"
              id="Bairro"
              name="Bairro"
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
            />

            <label for="cash" className="title-form-input">
              Preço
            </label>
            <input
              className="input-form"
              type="number"
              id="cash"
              name="cash"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <div className="buttons-post">
              <button className="button-cancel" onClick={handleReset}>
                Cancelar
              </button>
              <button className="button-post">Postar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
