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
      company: "Departamento Ciencias de la Computación Uchile",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
            officiis dolores deserunt? Id quos ex esse quis minus natus aperiam
            iusto tempore corrupti! Illo iste hic quam ea error explicabo.\n
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
            officiis dolores deserunt? Id quos ex esse quis minus natus aperiam
            iusto tempore corrupti! Illo iste hic quam ea error explicabo. `,
      tech: ["Vue.js", "Django", "Python", "Javascript", "CSS", "HTML"],
      image: `${proyect1_img1}`,
    },
    {
      id: 1,
      title:
        "Clasificación de estado fenológico en frutas usando visión computacional",
      company: "Instracrops",
      description: `Desarrollo de un modelo para la clasificación de estados fenológicos de frutales (cerezas, manzanas y agaves) utilizando redes neuronales profundas como VGG16 y YOLO-NAS,implementadas con TensorFlow y PyTorch. `,
      tech: ["Python", "Pytorch", "Tensorflow"],
      image: `${proyect2_img1}`,
    },
    {
      id: 2,
      title: "Aplicación web para análisis de datos",
      company: "LookData",
      description: `Desarrollo de un dashboard para visualizar métricas de ventas y pedidos en tiempo real para restaurantes de delivery. 
Implementación del frontend con React y TypeScript, con integración a un backend desarrollado en Django y consultas optimizadas con MySQL.
 `,
      tech: ["React", "Django", "Python", "Typescript", "Tailwind", "HMTL"],
      image: `${proyect3_img1}`,
    },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <h2>Proyectos</h2>
      <div className={styles.grid}>
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
