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
      description: `Proyecto de varias iterraciones donde el objetivo era la mejora de usabilidad para crear y editar post-it, creación de la funcionalidad de compartir puntero entre usuarios en línea y Especificación de costo según post-it
      
      En este proyecto trabajé en un grupo de 6 personas donde aprendí a como trabajar sobre un proyecto ya iniciado y como aportar a su escalabilidad, a trabajar en base a requerimientos y como estimar el tiempo de cada tarea y a como trabajar con una contraparte con feedback semanal`,
      tech: ["Vue.js", "Django", "Python", "Javascript", "CSS", "HTML"],
      image: `${proyect1_img1}`,
    },
    {
      id: 1,
      title:
        "Clasificación de estado fenológico en frutas usando visión computacional",
      company: "Instracrops",
      description: `Desarrollo de múltiples modelos para la clasificación de estados fenológicos de frutales (cerezas, manzanas y agaves) utilizando redes neuronales profundas como VGG16 y YOLO-NAS,implementadas con TensorFlow y PyTorch.
      
      En este proyecto trabajé con 4 personas más, donde pude aprender a usar trasformers pre-entrenados, como realizar fine-tuning a un modelo con el fin de lograr una tarea en específico y trabajar bajo la metodología Agile para la mejora del producto final en cada sprint. 
      `,
      tech: ["Python", "Pytorch", "Tensorflow"],
      image: `${proyect2_img1}`,
    },
    {
      id: 2,
      title: "Aplicación web para análisis de datos",
      company: "LookData",
      description: `Desarrollo de un dashboard para visualizar métricas de ventas y pedidos en tiempo real para restaurantes de delivery, onboarding de múltiples plataformas de delivery para centralizar la información.
Implementación del frontend con React y TypeScript, con integración a un backend desarrollado en Django y consultas optimizadas con MySQL.

En este proyecto trabajé con un grupo de 6 personas, donde aprendí buenas prácticas de trabajo de varias personas en un proyecto, revisión de pull requests, creación de endpoints, como consumir estos mostrar cambios en una página web, diseño de BBDD multimodelo en base a los requerimientos del cliente y Creación de ETL para agrupar datos desde distintas fuentes. 
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
