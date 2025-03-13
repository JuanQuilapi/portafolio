import About from "./components/About";
import Navbar from "./components/Navbar";
import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";
import { useState } from "react";
import "./styles/globals.css";
import "./styles/theme.css";

function App() {
  const [list, setList] = useState(["Goku", "Tanjiro", "Chanchito"]);
  // const [isLoading, setIsLoading] = useState(false);
  // // const handleClick = () => setIsLoading(!isLoading);

  const addElements = () => {
    setList(list.concat("Minion"));
  };

  const deleteElements = () => {
    setList(list.slice(0, -1));
  };

  const handleSelect = (elemento: string) => {
    console.log("imprimiendo", elemento);
  };

  return (
    <div className="App">
      <Navbar />
      <About />
      <h2>Proyectos</h2>
      <Card>
        <CardBody title={"Titulo"} text={"El texto del componente"} />
        <Button onClick={addElements}>Agregar</Button>
        <Button onClick={deleteElements}>Eliminar</Button>
        {list.length !== 0 && <List data={list} onSelect={handleSelect} />}
      </Card>
    </div>
  );
}

export default App;
