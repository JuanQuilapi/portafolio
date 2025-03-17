import styles from "./Experience.module.css";

const Experience = () => {
  const experiences = [
    {
      title: "Tesista/Data Science Intern",
      company: "Enaex",
      date: "Feb 2024–Oct 2024",
      location: "Las Condes, Santiago",
      description: [
        "Diseño e implementación de un modelo para la asignación de carguío en faena, basado en datos operativos de los equipos y técnicas de clustering desarrolladas en Python",
        "Construcción de un pipeline de procesamiento de datos basado en Apache Airflow, con integración a la nube de Azure",
        "Documentación de resultados y colaboración con equipos interdisciplinarios para alinear soluciones con objetivos empresariales",
      ],
    },
    {
      title: "Ayudante de cátedra",
      company: "Universidad de Chile",
      date: "Mar 2023–Jul 2024",
      location: "Santiago, Santiago",
      description: [
        "Apoyo en cursos de Procesamiento masivo de datos y Web de datos",
        "Revisión de tareas y asistencia a estudiantes en laboratorios",
      ],
    },
    {
      title: "Intern",
      company: "Sanluca cc",
      date: "Ene 2023–Abr 2023",
      location: "Copenhague, Dinamarca",
      description: [
        "Análisis de datos de geolocalización de ciclistas mediante técnicas de clustering en Python",
        "Generación de insights sobre segmentos exigentes y métricas de elevación en carreras",
      ],
    },
  ];

  return (
    <section id="Experience" className={styles.experienceSection}>
      <h2>Experiencia Profesional</h2>
      <ul className={styles.experienceList}>
        {experiences.map((exp, index) => (
          <li key={index} className={styles.experienceItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.content}>
              <div className={styles.header}>
                <h3>{exp.title}</h3>
                <span className={styles.company}>{exp.company}</span>
              </div>
              <div className={styles.subHeader}>
                <span className={styles.date}>{exp.date}</span>
                <span className={styles.location}>{exp.location}</span>
              </div>
              <ul className={styles.descriptionList}>
                {exp.description.map((desc, descIndex) => (
                  <li key={descIndex} className={styles.descriptionItem}>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
