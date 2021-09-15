import { BrowserRouter, Route } from "react-router-dom";

// importando componentes
import Home from "./Home/Home";
import Search from "./Search/Search";
import addRecipes from "./Form/AddRecipes";
import ReciverDetails from "./RecipeDetails/RecipeDetails";
import CategoryFilter from "./CategoryFilter/CategoryFilter";
import EditRecipes from "./Form/EditRecipes";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/addRecipes" component={addRecipes} />
      <Route exact path="/receitas/:_id" component={ReciverDetails} />
      <Route exact path="/category/:type" component={CategoryFilter} />
      <Route exact path="/receita/Update/:_id" component={EditRecipes} />
    </BrowserRouter>
  );
}

export default App;
