import React from "react";
import "./Styles/FeaturedCard.css";

import alterar from "./assests/Chicken/FrangoAssado200.jpg";
import { Link } from "react-router-dom";

class FeaturedCard extends React.Component {
  state = {
    isClicked: false,
  };

  clickLike = () => {
    if (this.state.isClicked) {
      this.setState({ isClicked: false });
    } else {
      this.setState({ isClicked: true });
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="feature">
        <div className="featureTitlesGeneral">
          <div className="featureTitles">
            <h1>Receitas em destaque</h1>
            <p>As receitas mais curtidas da comunidade</p>
          </div>
        </div>

        <div className="featureCardGeneral">
          <div className="featureCard">
            <div>
              <Link to="/linkdareceita">
                <img src={alterar} alt="colocar o nome da comida" />
              </Link>
            </div>
            <div className="infoNameRecipe">
              <h3>Nome da receita</h3>
            </div>
            <div className="infoGeneral">
              <h4>Nome do usuario</h4>
              <button onClick={this.clickLike}>
                <i
                  className={
                    this.state.isClicked ? "fas fa-heart" : "far fa-heart"
                  }
                ></i>
              </button>
            </div>
          </div>

          <div className="featureCard">
            <div>
              <Link to="/">
                <img src={alterar} alt="colocar o nome da comida" />
              </Link>
            </div>
            <div className="infoNameRecipe">
              <h3>Nome da receita</h3>
            </div>
            <div className="infoGeneral">
              <h4>Nome do usuario</h4>
              <button onClick={this.clickLike}>
                <i
                  className={
                    this.state.isClicked ? "fas fa-heart" : "far fa-heart"
                  }
                ></i>
              </button>
            </div>
          </div>

          <div className="featureCard">
            <div>
              <Link to="/linkdareceita">
                <img src={alterar} alt="colocar o nome da comida" />
              </Link>
            </div>
            <div className="infoNameRecipe">
              <h3>Nome da receita</h3>
            </div>
            <div className="infoGeneral">
              <h4>Nome do usuario</h4>
              <button onClick={this.clickLike}>
                <i
                  className={
                    this.state.isClicked ? "fas fa-heart" : "far fa-heart"
                  }
                ></i>
              </button>
            </div>
          </div>

          <div className="featureCard">
            <div>
              <Link to="/linkdareceita">
                <img src={alterar} alt="colocar o nome da comida" />
              </Link>
            </div>
            <div className="infoNameRecipe">
              <h3>Nome da receita</h3>
            </div>
            <div className="infoGeneral">
              <h4>Nome do usuario</h4>
              <button onClick={this.clickLike}>
                <i
                  className={
                    this.state.isClicked ? "fas fa-heart" : "far fa-heart"
                  }
                ></i>
              </button>
            </div>
          </div>


          <div className="featureCard">
            <div>
              <Link to="/linkdareceita">
                <img src={alterar} alt="colocar o nome da comida" />
              </Link>
            </div>
            <div className="infoNameRecipe">
              <h3>Nome da receita</h3>
            </div>
            <div className="infoGeneral">
              <h4>Nome do usuario</h4>
              <button onClick={this.clickLike}>
                <i
                  className={
                    this.state.isClicked ? "fas fa-heart" : "far fa-heart"
                  }
                ></i>
              </button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default FeaturedCard;
