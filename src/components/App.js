import { BrowserRouter, Route } from 'react-router-dom';

// importando componentes
// import NavBar from "./Home/NavBar";
// import Categories from "./Home/Categories";
// import FeaturedCard from "./Home/FeaturedCard";
import Search from './Search/Search';
import Home from './Home/Home';
import addRecipes from './Home/form/addRecipes';
import NavBar from './Home/NavBar';

function App() {
    return (
        <BrowserRouter>
            <Route path="/" component={NavBar} />
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/addRecipes" component={addRecipes} />
        </BrowserRouter>
    );
}

export default App;
