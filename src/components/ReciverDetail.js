import React, { Component } from 'react';
import Axios from 'axios';

class ReciverDetail extends Component {
    state = {
        name: '',
        type: '',
        imageUrl: '',
        preparation_time: '',
        portions: '',
        level: '',
        ingredients: [],
        preparationMethod: [],
        recive: {},
        ready: false,
    };
    componentDidMount = () => {
        Axios.get(
            `https://ironrest.herokuapp.com/recipes/${this.props.match.params._id}`
        )
            .then(response => {
                this.setState({ ...response.data });
            })
            .catch(err => console.log(err));
    };

    render() {
        console.log(this.state.recive);
        return (
            <div>
                <div>
                    <img src={this.state.imageUrl} alt="Comida" />
                </div>
                <div>
                    <div>
                        <h1>{this.state.name}</h1>
                    </div>
                    <div>
                        <h3>{this.state.preparation_time}</h3>
                        <h3>{this.state.level}</h3>
                        <h3>{this.state.portions}</h3>
                    </div>
                </div>
                <div>
                    <div>
                        <h2>ingredientes</h2>
                        <ul>
                            {this.state.ingredients.map(element => {
                                return <li>{element}</li>;
                            })}
                        </ul>
                    </div>
                    <div>
                        <h2>Modo de preparo</h2>
                        <ol>
                            {this.state.preparationMethod.map(metodo => {
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
