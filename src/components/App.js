import recipes from "../components/Receitas";
console.log(recipes[0].imageUrl);



function App() {
  return (
    <div>
      <h1>hello word!</h1>
      <img src={recipes[9].imageUrl} alt="nome do prato" />
      <h1>{recipes[9].name}</h1>
      <h1>{recipes[9].type}</h1>
    </div>
  );
}

export default App;
