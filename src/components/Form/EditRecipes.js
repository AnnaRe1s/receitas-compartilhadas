import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Nav from "../Home/NavBar"

class EditRecipes extends React.Component {
  state = {
    name: "",
    type: "",
    imageUrl: "",
    preparation_time: "",
    portions: "",
    level: "",
    ingredients: [],
    preparationMethod: [],
  };
  componentDidMount = () => {
    axios
      .get(
        `https://ironrest.herokuapp.com/recipes/${this.props.match.params._id}`
      )
      .then((response) => {
        this.setState({ ...response.data });
        console.log("edicao resposta:", response);
      })
      .catch((err) => console.error(err));
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // retirando o id
      const obj = { ...this.state };
      delete obj["_id"];
      // Transformando \n em ,""
      obj["ingredients"] = obj["ingredients"].split("\n")
      obj["preparationMethod"] = obj["preparationMethod"].split("\n")

      const response = await axios.put(
        `https://ironrest.herokuapp.com/recipes/${this.props.match.params._id}`,
        obj
      );
      console.log("response:", response);

      this.props.history.push("/");
    } catch (err) {
      console.error(err);
    }
  };
  render() {

    return (
      <div >
        <form className="form" onSubmit={this.handleSubmit}>
        <div className="browserNav">
            <Nav />
          </div>
          <div className="titleBar">
            <Link to="/">
              <button className="previus">
                <i className="fas fa-chevron-left"></i>
              </button>
            </Link>
            <h1>   Edite sua receita!</h1>
          </div>
          <div className="labelInput">
            <label>Nome da receita</label>
            <input
              value={this.state.name}
              name="name"
              onChange={this.handleChange}
            />
          </div>
          <div className="labelInput">
            <label>Categoria </label>
            <select
              value={this.state.type}
              onChange={this.handleChange}
              name="type"
            >
              <option value="Carne">Carne</option>
              <option value="Frango">Frango</option>
              <option value="Porco">Porco</option>
              <option value="Peixe">Peixe</option>
              <option value="Sobremesa">Sobremesa</option>
              <option value="Massas">Massas</option>
              <option value="Vegetariano">Vegetariano</option>
            </select>
          </div>
          <div className="labelInput">
            <label>Tempo de preparo da receita</label>
            <input
              value={this.state.preparation_time}
              name="preparation_time"
              onChange={this.handleChange}
            />
          </div>
          <div className="labelInput">
            <label>Quantas porções essa receita serve</label>
            <input
              value={this.state.portions}
              name="portions"
              onChange={this.handleChange}
            />
          </div>
          <div className="labelInput">
            <label>ingredients</label>
            <textarea
              value={this.state.ingredients}
              name="ingredients"
              onChange={this.handleChange}
            >
              {" "}
            </textarea>
          </div>
          <div className="labelInput">
            <label>Metodo de preparo</label>
            <textarea
              value={this.state.preparationMethod}
              name="preparationMethod"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="labelInput">
            <label>Dificuldade de preparo</label>
            <select
              value={this.state.level}
              onChange={this.handleChange}
              name="level"
            >
              <option value="Facil">Fácil</option>
              <option value="Medio">Médio</option>
              <option value="Dificil">Difícil</option>
            </select>
          </div>
          <div className="labelInput">
            <label>URL da imagem da receita</label>
            <textarea
              name="imageUrl"
              value={this.state.imageUrl}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="labelInput">
            <button type="submit">
              Alterar receita
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default EditRecipes;
