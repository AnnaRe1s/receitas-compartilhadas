import "./Styles/Categories.css";

// imagens
import meat from "./assests/Meat/fraldinha-assada-cerveja200.jpg";
import chicken from "./assests/Chicken/FrangoAGrega200.jpg";
import pig from "./assests/Pig/bochecha-de-porco-pururucada-com-laranja200.jpg";
import fish from "./assests/Fish/Muqueca-de-peixe 200.jpg";
import dessert from "./assests/Dessert/tiramisu200.jpg";
import pasta from "./assests/Pasta/massas200.jpg";
import veggie from "./assests/Veggie/Veggie200.jpg";
import { Link } from "react-router-dom";

function Categories() {




  
  return (
    <div className="categories">
      <div>
        <h1>Categorias</h1>
      </div>
      <div className="categoryList">
        <div className="card">
          <Link to={`/category/type`}>
            <img src={meat} alt="acessar categoria carne" />
          </Link>
          <p>Carne</p>
        </div>
        <div className="card">
          <Link to="chicken">
            <img src={chicken} alt="acessar categoria frango" />{" "}
          </Link>
          <p>Frango</p>
        </div>
        <div className="card">
          <Link to="/pig">
            <img src={pig} alt="acessar categoria porco" />{" "}
          </Link>
          <p>Porco</p>
        </div>
        <div className="card">
          <Link to="/fish">
            <img src={fish} alt="acessar categoria peixe"/>{" "}
          </Link>
          <p>Peixe</p>
        </div>
        <div className="card">
          <Link to="/dessert">
            <img src={dessert} alt="acessar categoria sobremesas"/>{" "}
          </Link>
          <p>Sobremesas</p>
        </div>
        <div className="card">
          <Link to="/pasta">
            <img src={pasta} alt="acessar categoria massas"/>{" "}
          </Link>
          <p>Massas</p>
        </div>
        <div className="card">
          <Link to="/veggie">
            <img src={veggie} alt="acessar categoria vegetariano" />{" "}
          </Link>
          <p>Vegetariano</p>
        </div>
      </div>
    </div>
  );
}

export default Categories;
