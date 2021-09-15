import React from "react";
import axios from "axios";

class CategoyFilter extends React.Component {
  state = {};


  getObjs = async () => {
    const response = await axios.get("https://ironrest.herokuapp.com/recipes");

    const types = response.data;
    console.log(`type`,types)

    // this.setState({ recipes: [...objs] });
  };

  render() {

    this.getObjs()
    return (
      <div>
        <h1>Heloo Word</h1>
      </div>
    );
  }
}

export default CategoyFilter;
