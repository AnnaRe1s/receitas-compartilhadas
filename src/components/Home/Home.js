import React from "react";
// importando componentes
import NavBar from "./NavBar";
import Categories from "./Categories";
import FeaturedCard from "./FeaturedCard";
// import axios from "axios";

class Home extends React.Component {
  // state = {
  //   name: "",
  //   type: "",
  //   imageUrl: [],
  //   preparationTime: "",
  //   portions: 0,
  //   level: "",
  //   likes: 0,
  //   ingredients: [],
  //   preparationMethod: [],
  // };

  // componentDidMount = async () => {
  //   this.getData();
  // };

  // getData = async () => {
  //   const response = await axios.get("https://ironrest.herokuapp.com/recipes");

  //   // pegando todos os objetos completos
  //   const objs = response.data[0].recipes;

  //   // pegando os objetos das chaves e add no state
  //   const chartName = [];
  //   const chartType = [];
  //   const chartImageUrl = [];
  //   const chartPreparation = [];
  //   const chartPortions = [];
  //   const chartLevel = [];
  //   const chartLikes = [];
  //   const chartIngredients = [];
  //   const chartreparationMethod = [];

  //   for (let key in objs) {
  //     chartName.push(objs[key].name);
  //     chartType.push(objs[key]["type"]);
  //     chartImageUrl.push(objs[key]["imageUrl"]);
  //     chartPreparation.push(objs[key]["preparation_time"]);
  //     chartPortions.push(objs[key]["portions"]);
  //     chartLevel.push(objs[key]["level"]);
  //     chartLikes.push(objs[key]["likes"]);
  //     chartIngredients.push(objs[key]["ingredients"]);
  //     chartreparationMethod.push(objs[key]["preparationMethod"]);
  //   }

  //   this.setState({
  //     name: [...chartName],
  //     type: [...chartType],
  //     imageUrl: [...chartImageUrl],
  //     preparationTime: [...chartPreparation],
  //     portions: [...chartPortions],
  //     level: [...chartLevel],
  //     likes: [...chartLikes],
  //     ingredients: [...chartIngredients],
  //     preparationMethod: [...chartreparationMethod],
  //   });
  // };

  render() {
    return (
      <div>
        <NavBar />
        <Categories />
        <FeaturedCard/>
      </div>
    );
  }
}

export default Home;
