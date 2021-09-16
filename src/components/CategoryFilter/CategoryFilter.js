import React from "react";
import axios from "axios";

class CategoyFilter extends React.Component {
  state = {

    meat: []


  };

  getObjs = async () => {
    const response = await axios.get("https://ironrest.herokuapp.com/recipes");

    const recipes = response.data;
    console.log(`recipes`,recipes)

   


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
