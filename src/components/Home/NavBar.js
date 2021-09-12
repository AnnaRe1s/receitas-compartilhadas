import { Link } from "react-router-dom";
import React from "react";

// Css
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/NavBar.css";

// Imagens
import logo from "./assests/Logo/logoRecipes100.jpg";

class NavBar extends React.Component {
  state = {
    search: [],
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <nav className="nav">
          <div className="container">
            <Link to="/">
              <img src={logo} alt="Logo do app" />
            </Link>
            <form onSubmit={this.handleChange}>
              <input
                className="InputSearch"
                type="search"
                placeholder="Search"
                value={this.state.search}
                name="search"
                onChange={this.handleChange}
              />
              <button className="button" type="submit">
                <i class="fas fa-search"></i>
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
