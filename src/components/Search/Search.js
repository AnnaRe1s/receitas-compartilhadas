import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Style/Search.css";

class Search extends React.Component {
  state = {
    recipes: [],
    input: "",
  };
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.input !== prevState.input) {
  //     this.props.(this.state.input);
  //   }
  // }

  componentDidMount = () => {
    this.getApi();
  };

  getApi = async () => {
    const response = await axios.get("https://ironrest.herokuapp.com/recipes");
    const obj = response.data;
    this.setState({ recipes: [...obj] });
  };

  handleSearch = (event) => {
    const { value } = event.target;
    this.setState({ input: value });
  };

  render() {
    console.log(this.state.input);

    return (
      <div>
        <div className="barSearch">
          <Link to="/">
            <button className="previus">
              <i class="fas fa-chevron-left"></i>
            </button>
          </Link>
          <h1>Pesquisa</h1>
        </div>

        <div className="input-group" style={{ width: "90%", margin: "3% 5%" }}>
          <input
            type="text"
            className="form-control"
            style={{ backgroundColor: "#e9ecef", border: "none" }}
            placeholder="Username"
            onChange={this.handleSearch}
            value={this.state.input}
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <button
            type="button"
            className="input-group-text"
            style={{ border: "none" }}
            id="basic-addon1"
          >
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div>
          {this.state.recipes.map((element) => {
            return (
              <Link to={`/${element._id}`} style={{ textDecoration: "none" }}>
                <div className="container">
                  <img src={element.imageUrl} alt={element.name} />
                  <h4>{element.name}</h4>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Search;
