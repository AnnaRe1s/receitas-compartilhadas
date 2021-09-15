import React from "react";
import axios from "axios";

class AddRecipes extends React.Component {
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

  handleSubmit = (e) => {
    e.preventDefault();
    const obj = { ...this.state };
    obj["ingredients"] = obj["ingredients"].split("\n");
    obj["preparationMethod"] = obj["preparationMethod"].split("\n");
    axios
      .post("https://ironrest.herokuapp.com/recipes", obj)
      .then((response) => {
        console.log(response);
        this.props.history.push("/");
      })
      .catch((err) => console.log(err));
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="mt-5 text-left w-100 d-flex justify-content-center">
        <form onSubmit={this.handleSubmit} className="col-6">
          <div className="form-group">
            <label>Nome da nova receita</label>
            <input
              className="form-control"
              value={this.state.name}
              name="name"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
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

          <div className="form-group">
            <label>Tempo de preparo da receita</label>
            <input
              className="form-control"
              value={this.state.preparation_time}
              name="preparation_time"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Quantas porções essa receita serve</label>
            <input
              className="form-control"
              value={this.state.portions}
              name="portions"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>ingredients</label>
            <textarea
              className="form-control"
              value={this.state.ingredients}
              name="ingredients"
              onChange={this.handleChange}
            ></textarea>
          </div>

          <div className="form-group">
            <label>Metodo de preparo</label>
            <textarea
              className="form-control"
              value={this.state.preparationMethod}
              name="preparationMethod"
              onChange={this.handleChange}
            ></textarea>
          </div>

          <div className="form-group">
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

          <div className="form-group">
            <label>URL da imagem da receita</label>
            <textarea
              className="form-control"
              name="imageUrl"
              value={this.state.imageUrl}
              onChange={this.handleChange}
            ></textarea>
          </div>

          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddRecipes;
