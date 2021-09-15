import React from 'react';
import axios from 'axios';

class RemoveReciver extends React.Component {
    componentDidMount = () => {
        axios
            .delete(
                `https://ironrest.herokuapp.com/recipes${this.props.match.params.id}`
            )
            .then(response => {
                console.log(response);
                this.props.history.push('/');
            })
            .catch(err => console.error(err));
    };

    render() {
        return <p>Deletando...</p>;
    }
}

export default RemoveReciver;
