import "./Styles/Categories.css";

// imagens
import meat from "./assests/Meat/fraldinha-assada-cerveja200.jpg";
import chicken from "./assests/Chicken/FrangoAGrega200.jpg";
import pig from "./assests/Pig/bochecha-de-porco-pururucada-com-laranja200.jpg";
import fish from "./assests/Fish/Muqueca-de-peixe 200.jpg";
import dessert from "./assests/Dessert/tiramisu200.jpg";
import pasta from "./assests/Pasta/massas200.jpg";
import veggie from "./assests/Veggie/Veggie200.jpg";

function Categories() {
  return (
    <div className="categories">
      <div>
        <h1>Categorias</h1>
      </div>
      <div className="categoryList">
          <div className="card">
            <img src={meat} alt="acessar categoria carne" />
            <p>Carne</p>
          </div>
          <div className="card">
            <img src={chicken} alt="acessar categoria frango" />
            <p>Frango</p>
          </div>
          <div className="card">
            <img src={pig} alt="acessar categoria porco" />
            <p>Porco</p>
          </div>
          <div className="card">
            <img src={fish} alt="acessar categoria peixe" />
            <p>Peixe</p>
          </div>
          <div className="card">
            <img src={dessert} alt="acessar categoria sobremesas" />
            <p>Sobremesas</p>
          </div>
          <div className="card">
            <img src={pasta} alt="acessar categoria massas" />
            <p>Massas</p>
          </div>
          <div className="card">
            <img src={veggie} alt="acessar categoria vegetariano" />
            <p>Vegetariano</p>
          </div>
      </div>
    </div>
  );
}

export default Categories;
