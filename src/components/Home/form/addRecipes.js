import React from 'react';
import axios from 'axios';

class AddRecipes extends React.Component {
    state = {
        name: '',
        type: '',
        imageUrl: '',
        preparationTime: '',
        portions: '',
        level: '',
        likes: '',
        ingredients: [],
        preparationMethod: '',
    };

    handleSubmit = e => {
        e.preventDefault();

        axios
            .post('https://ironrest.herokuapp.com/recipes', { ...this.state })
            .then(response => {
                console.log(response);
                this.props.history.push('/home');
            })
            .catch(err => console.log(err));
    };
    handleChange = e => {
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
                        <label>Categoria da receita</label>
                        <input
                            className="form-control"
                            value={this.state.type}
                            name="type"
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Tempo de preparo da receita</label>
                        <input
                            className="form-control"
                            value={this.state.preparationTime}
                            name="preparationTime"
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
                        <input
                            className="form-control"
                            value={this.state.ingredients}
                            name="ingredients"
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Metodo de preparo</label>
                        <input
                            className="form-control"
                            value={this.state.preparationMethod}
                            name="preparationMethod"
                            onChange={this.handleChange}
                        />
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