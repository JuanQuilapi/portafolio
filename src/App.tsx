import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About /> {/* Use the component */}
      <Card body={"Hola Mundo"} />
    </div>
  );
}

export default App;
