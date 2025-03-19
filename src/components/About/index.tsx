import styles from "./About.module.css";

function About() {
  const description = `Especializado en creación modelos de machine learning y desarrollo Full-Stack, con experiencia en empresa de la industria minera.\n
            Egresado en Ingeniería Civil en Computación y Magíster en Ciencia de Datos en la Universidad de Chile, 25 años, apasionado por crear soluciones usando datos .`;
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        {/* Image Container */}
        <div className={styles.imageWrapper}>
          <img
            src="https://i.pravatar.cc/300"
            alt="Juan Ignacio Quilapi Jordán"
            className={styles.profileImage}
          />
        </div>

        {/* Text Content */}
        <div className={styles.content}>
          <h1 className={styles.title}>Juan Ignacio Quilapi Jordán</h1>
          <h2 className={styles.subtitle}>Software Engineer</h2>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </section>
  );
}

export default About;
