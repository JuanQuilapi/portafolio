import styles from "./Card.module.css";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
}

function Card({ project }: { project: Project }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={project.image} alt={project.title} className={styles.image} />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.techStack}>
          {project.tech.map((tech) => (
            <span key={tech} className={styles.tech}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.links}>
          {project.github && (
            <a href={project.github} className={styles.link}>
              GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} className={styles.link}>
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default Card;
