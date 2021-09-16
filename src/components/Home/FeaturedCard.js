import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Styles/FeaturedCard.css';

class FeaturedCard extends React.Component {
    state = {
        recipes: [],
    };

    componentDidMount = async () => {
        this.getObjs();
    };

    getObjs = async () => {
        const response = await axios.get(
            'https://ironrest.herokuapp.com/recipes'
        );

        // pegando todos os objetos completos
        const objs = response.data;

        this.setState({ recipes: [...objs] });
    };

  render() {

    return (
      <div className="feature">
        <div className="featureTitlesGeneral">
          <div className="featureTitles">
            <h1>Receitas</h1>
            <p>As receitas mais curtidas da comunidade</p>
          </div>
        </div>
        <div className="featureCardGeneral">
          {this.state.recipes.map((element) => {
            return (
              <div className="featureCard">
                <div>
                  <Link to={`/receitas/${element._id}`}>
                    <img src={element.imageUrl} alt={element.name} />
                  </Link>
                </div>
                <div className="featureCardGeneral">
                    {this.state.recipes.map(element => {
                        return (
                            <div className="featureCard">
                                <div>
                                    <Link to={`/receitas/${element._id}`}>
                                        <img
                                            src={element.imageUrl}
                                            alt={element.name}
                                        />
                                    </Link>
                                </div>
                                <div className="infoNameRecipe">
                                    <h3>{element.name}</h3>
                                </div>
                                <div className="information">
                                    <div className="infoGeneral">
                                        <h4>Porções:</h4>
                                        <h4>{element.portions}</h4>
                                    </div>
                                    <div className="infoGeneral">
                                        <h4>Tempo:</h4>
                                        <h4>{element.preparation_time}</h4>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default FeaturedCard;
