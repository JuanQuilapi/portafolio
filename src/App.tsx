import "./styles/globals.css";
import "./styles/theme.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Tech from "./components/Tech/";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-wrapper">
        <About />
        <Experience />
        <Projects />
        <Tech />
      </main>
      <Footer />
    </div>
  );
}

export default App;
