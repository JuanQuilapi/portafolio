// components/Projects/Projects.tsx
import styles from "./Projects.module.css";
import Card from "../Card";

const Projects = () => {
  const description: string = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
            officiis dolores deserunt? Id quos ex esse quis minus natus aperiam
            iusto tempore corrupti! Illo iste hic quam ea error explicabo.`;
  const projects = [
    {
      id: 0,
      title: "E-commerce Platform",
      description: "Full-stack shopping platform with React and Node.js",
      tech: ["React", "Node.js", "MongoDB"],
      image: "https://picsum.photos/400/250?random=0",
      github: "#",
      demo: "#",
    },
    {
      id: 1,
      title: "E-commerce Platform",
      description: `${description}`,
      tech: ["React", "Node.js", "MongoDB"],
      image: "https://picsum.photos/400/250?random=1",
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Full-stack shopping platform with React and Node.js",
      tech: ["React", "Node.js", "MongoDB"],
      image: "https://picsum.photos/400/250?random=2",
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description: "Full-stack shopping platform with React and Node.js",
      tech: ["React", "Node.js", "MongoDB"],
      image: "https://picsum.photos/400/250?random=3",
      github: "#",
      demo: "#",
    },
    {
      id: 4,
      title: "E-commerce Platform",
      description: "Full-stack shopping platform with React and Node.js",
      tech: ["React", "Node.js", "MongoDB"],
      image: "https://picsum.photos/400/250?random=4",
      github: "#",
      demo: "#",
    },
    {
      id: 5,
      title: "E-commerce Platform",
      description: "Full-stack shopping platform with React and Node.js",
      tech: ["React", "Node.js", "MongoDB"],
      image: "https://picsum.photos/400/250?random=5",
      github: "#",
      demo: "#",
    },
    {
      id: 6,
      title: "E-commerce Platform",
      description: "Full-stack shopping platform with React and Node.js",
      tech: ["React", "Node.js", "MongoDB"],
      image: "https://picsum.photos/400/250?random=6",
      github: "#",
      demo: "#",
    },
    {
      id: 7,
      title: "E-commerce Platform",
      description: "Full-stack shopping platform with React and Node.js",
      tech: ["React", "Node.js", "MongoDB"],
      image: "https://picsum.photos/400/250?random=7",
      github: "#",
      demo: "#",
    },
    {
      id: 8,
      title: "E-commerce Platform",
      description: "Full-stack shopping platform with React and Node.js",
      tech: ["React", "Node.js", "MongoDB"],
      image: "https://picsum.photos/400/250?random=8",
      github: "#",
      demo: "#",
    },

    // Add more projects...
  ];

  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.sectionTitle}>Projects</h2>
      <div className={styles.grid}>
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
