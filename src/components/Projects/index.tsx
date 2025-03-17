// components/Projects/Projects.tsx
import styles from "./Projects.module.css";
import Card from "../Card";
import proyect1_img1 from "../../img/proyectos/tablero/imagen1.webp";
import proyect2_img1 from "../../img/proyectos/instacrops/imagen1.webp";
import proyect3_img1 from "../../img/proyectos/smartkam/imagen1.webp";

const Projects = () => {
  const projects = [
    {
      id: 0,
      title: "Tablero digital para levantamiento de requisitos",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
            officiis dolores deserunt? Id quos ex esse quis minus natus aperiam
            iusto tempore corrupti! Illo iste hic quam ea error explicabo.\n
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
            officiis dolores deserunt? Id quos ex esse quis minus natus aperiam
            iusto tempore corrupti! Illo iste hic quam ea error explicabo. `,
      tech: ["Vue.js", "Django", "Javascript", "Css"],
      image: `${proyect1_img1}`,
      github: "#",
      demo: "#",
    },
    {
      id: 1,
      title:
        "Clasificación de estado fenológico en frutas usando visión computacional",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
            officiis dolores deserunt? Id quos ex esse quis minus natus aperiam
            iusto tempore corrupti! Illo iste hic quam ea error explicabo. \n 
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
            officiis dolores deserunt? Id quos ex esse quis minus natus aperiam
            iusto tempore corrupti! Illo iste hic quam ea error explicabo. `,
      tech: ["Python", "Pytorch", "Tensorflow"],
      image: `${proyect2_img1}`,
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "Aplicación web para análisis de datos",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
            officiis dolores deserunt? Id quos ex esse quis minus natus aperiam
            iusto tempore corrupti! Illo iste hic quam ea error explicabo. \n 
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
            officiis dolores deserunt? Id quos ex esse quis minus natus aperiam
            iusto tempore corrupti! Illo iste hic quam ea error explicabo. `,
      tech: ["React", "Django", "Python", "Typescript", "Tailwind"],
      image: `${proyect3_img1}`,
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.sectionTitle}>Proyectos</h2>
      <div className={styles.grid}>
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
