import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const list: string[] = ["awa"];
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => setIsLoading(!isLoading);

  const handleSelect = (elemento: string) => {
    console.log("imprimiendo", elemento);
  };

  return (
    <div className="App">
      <Navbar />
      <About />
      <Card>
        <CardBody title={"Titulo"} text={"El texto del componente"} />
        {list.length !== 0 && <List data={list} onSelect={handleSelect} />}
        <Button isLoading={isLoading} onClick={handleClick}>
          Hola Mundo
        </Button>
      </Card>
    </div>
  );
}

export default App;
