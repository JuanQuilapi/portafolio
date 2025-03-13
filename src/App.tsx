import "./styles/globals.css";
import "./styles/theme.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
    </div>
  );
}

export default App;
