import React from "react";
import { Link } from "react-router-dom";
import "./Style/Search.css";

class Search extends React.Component {


  render() {
    return (
      <div>
        <div className="barSearch">
          <Link to="/">
            <button className="previus">
              <i class="fas fa-chevron-left"></i>
            </button>
          </Link>
          <h1>Pesquisa</h1>
        </div>

        <div className="input-group" style={{width:"90%", margin:"3% 5%"}}>
          <input
            type="text"
            className="form-control"
            style={{backgroundColor:"#e9ecef", border:"none"}}
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          
          <button 
          type="button"
          className="input-group-text" 
          style={{border:"none"}} id="basic-addon1">
            <i className="fas fa-search"></i>
          </button>

        </div>
      </div>
    );
  }
}

export default Search;
