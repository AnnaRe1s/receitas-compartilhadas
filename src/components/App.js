import { BrowserRouter, Route } from "react-router-dom";

// importando componentes
import NavBar from "./Home/NavBar";
import Categories from "./Home/Categories";
import FeaturedCard from "./Home/FeaturedCard";




function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Categories/>
      <Route path="/" component={FeaturedCard} />

    </BrowserRouter>
  );
}

export default App;
