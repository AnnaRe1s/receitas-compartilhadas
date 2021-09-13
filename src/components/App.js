import { BrowserRouter, Route } from "react-router-dom";

// importando componentes
// import NavBar from "./Home/NavBar";
// import Categories from "./Home/Categories";
// import FeaturedCard from "./Home/FeaturedCard";
import Search from "./Search/Search";
import Home from "./Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Route exact path ="/" component= {Home} />
      <Route exact path="/search" component={Search} />
    </BrowserRouter>
  );
}

export default App;
