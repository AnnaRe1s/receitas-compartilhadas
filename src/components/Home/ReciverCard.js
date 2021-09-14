import React from "react";

function ReciverCard(props) {
  const showReciveres = () => {
    return props.recive.map((eachRecive) => {
      return (
        <div key={eachRecive._id}>
          <h2>{eachRecive.name}</h2>
          <img src={eachRecive.imageUrl} alt={eachRecive.name}/>
        </div>
      );
    });
  };

  if (props.ready) return <div> {showReciveres} </div>;
  else return <div>Carregando......</div>;
}

export default ReciverCard;
