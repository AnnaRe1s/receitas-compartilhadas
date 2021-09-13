import { BrowserRouter } from "react-router-dom";

// importando componentes
import NavBar from "./Home/NavBar";
import Categories from "./Home/Categories";




function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Categories/>
    </BrowserRouter>
  );
}

export default App;
