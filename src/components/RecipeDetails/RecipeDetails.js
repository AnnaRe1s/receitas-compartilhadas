import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

import "./RecipeDetails.css";

import Nav from "../Home/NavBar"

class ReciverDetail extends Component {
  state = {
    name: "",
    type: "",
    imageUrl: "",
    preparation_time: "",
    portions: "",
    level: "",
    ingredients: [],
    preparationMethod: [],
    recive: {},
    ready: false,
  };
  componentDidMount = () => {
    Axios.get(
      `https://ironrest.herokuapp.com/recipes/${this.props.match.params._id}`
    )
      .then((response) => {
        this.setState({ ...response.data });
      })
      .catch((err) => console.log(err));
  };
  render() {
    console.log(this.state.recive);
    return (
      <div className="pageRecipe">
        <div>
          <Link to="/">
            <button className="backHome">
              <i className="fas fa-chevron-left"></i>
            </button>
          </Link>
        </div>

        <div>
          <Link>
            <button className="editRecipe">
              <i className="fas fa-edit"></i>
            </button>
          </Link>
        </div>

        <div>
          <Link>
            <button className="delete">
              <i class="far fa-trash-alt"></i>
            </button>
          </Link>
        </div>
        <div className="imageRecipe">
          <img src={this.state.imageUrl} alt={this.state.name} />
        </div>

      
        <div className="box">
        <div className="boxInformation">
          <div className="nameRecipe">
            <h1>{this.state.name}</h1>
          </div>

          <div className="boxInfoRecipe">
            <div className="infoRecipe">
              <i className="far fa-clock"></i>
              <h3>{this.state.preparation_time}</h3>
            </div>
            <div className="infoRecipe">
              <i className="far fa-lemon"></i>
              <h3>{this.state.level}</h3>
            </div>
            <div className="infoRecipe">
              <i className="fas fa-utensils"></i>
              <h3>{this.state.portions} porções</h3>
            </div>
          </div>
        </div>
          <div className="ingredients">
            <h2>Ingredientes</h2>
            <ul>
              {this.state.ingredients.map((element) => {
                return <li>{element}</li>;
              })}
            </ul>
          </div>
          <div className="method">
            <h2>Modo de preparo</h2>
            <ol>
              {this.state.preparationMethod.map((metodo) => {
                return <li>{metodo}</li>;
              })}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default ReciverDetail;
