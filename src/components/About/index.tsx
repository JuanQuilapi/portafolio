import styles from "./About.module.css";

function About() {
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
          <h2 className={styles.subtitle}>Computer Engineer</h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
            officiis dolores deserunt? Id quos ex esse quis minus natus aperiam
            iusto tempore corrupti! Illo iste hic quam ea error explicabo.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
