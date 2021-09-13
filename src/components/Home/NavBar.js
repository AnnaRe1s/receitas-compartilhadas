import { Link } from "react-router-dom";
import React from "react";

// Css
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/NavBar.css";

// Imagens
import logo from "./assests/Logo/logoRecipesOrange100.jpg";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <nav className="barNav">
          <div className="container">
            <Link to="/">
              <img src={logo} alt="Logo do app" />
            </Link>
            <Link to="/search">
              <button className="buttonSearch">
                <i class="fas fa-search"></i>
              </button>
            </Link>
            <Link to="addRecipes">
              <button className="buttonAdd"><i class="fas fa-plus"></i> <p>Adicione sua receita</p></button>
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
