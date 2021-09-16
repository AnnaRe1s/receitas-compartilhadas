import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Style/CategoryFilter.css";

import Nav from "../Home/NavBar"
import Categories from "../Home/Categories";
import image from "../Home/assests/Logo/NotFound500.png";

class CategoyFilter extends React.Component {
  state = {
    recipes: [],
  };

  componentDidMount = () => {
    this.getObjs();
  };

  getObjs = async () => {
    const response = await axios.get("https://ironrest.herokuapp.com/recipes");

    const recipes = response.data;
    console.log(`recipes`, recipes);
    this.setState({ recipes: [...recipes] });
  };

  filterFood = () => {
    return this.state.recipes.filter((el) => {
      const url = this.props.location.pathname.split("/");
      const category = url[url.length - 1];
      console.log("url?", category);
      return el.type.toLowerCase() === category.toLowerCase();
    });
  };

  render() {
    console.log("props", this.props.location.pathname);
    return (
      <div>
      <div className="navBrowser">
        <Nav/>
      </div>
        <div className="categoryBar">
        <Link to="/">
            <button className="previusButton">
              <i className="fas fa-chevron-left"></i>
            </button>
          </Link>
          <Categories/>
        </div>
        <div className="recipesFilter">
          {this.filterFood().length > 0 ? (
            this.filterFood().map((element) => {
              return (
                <Link
                  to={`/receitas/${element._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="container">
                    <img src={element.imageUrl} alt={element.name} />
                    <h4>{element.name}</h4>
                  </div>
                </Link>
              );
            })
          ) : (
            <div className="notFound">
              <img
                src={image}
                alt="Não encontramos ums receita desta categoria"
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default CategoyFilter;
