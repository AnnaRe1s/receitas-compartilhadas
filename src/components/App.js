import { BrowserRouter, Route } from "react-router-dom";

// importando componentes
import Home from "./Home/Home";
import Search from "./Search/Search";
import addRecipes from "./Home/form/addRecipes";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/addRecipes" component={addRecipes} />
    </BrowserRouter>
  );
}

export default App;
