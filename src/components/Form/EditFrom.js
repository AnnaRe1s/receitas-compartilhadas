import React from 'react';
import axios from 'axios';

import AddRecipes from './addRecipes';

class EditRecipes extends React.Component {
    state = {
        name: '',
        type: '',
        imageUrl: '',
        preparation_time: '',
        portions: '',
        level: '',
        likes: '',
        ingredients: [],
        preparationMethod: '',
    };

    componentDidMount = () => {
        axios
            .get(`https://ironrest.herokuapp.com/recipes/`)
            .then(response => {
                this.setState({ ...response.data });
            })
            .catch(err => console.error(err));
    };

    handleChange = event => {
        return this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = async event => {
        event.preventDefault();

        console.log(this.state);

        try {
            const response = await axios.put(
                `https://ironrest.herokuapp.com/recipes`,
                this.state
            );
            console.log(response);
            this.props.history.push('/');
        } catch (err) {
            console.error(err);
        }
    };

    render() {
        return (
            <div>
                <h1>Editar Receita</h1>
                <AddRecipes
                    state={this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}

export default EditRecipes;