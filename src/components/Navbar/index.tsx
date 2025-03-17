import styles from "./Navbar.module.css";
import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <h1 className={styles.logo}>Portafolio</h1>
        <ul className={styles.navLinks}>
          <li>
            <a href="#Experience" className={styles.navLink}>
              Experiencia
            </a>
          </li>
          <li>
            <a href="#projects" className={styles.navLink}>
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contact" className={styles.navLink}>
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
