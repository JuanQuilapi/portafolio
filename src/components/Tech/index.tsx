import styles from "./Tech.module.css";

import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import javascript from "../../assets/javascript.svg";
import react from "../../assets/react.svg";
import tailwind from "../../assets/tailwind.svg";
import figma from "../../assets/figma.svg";
import php from "../../assets/php.svg";
import nodejs from "../../assets/nodejs.svg";
import sql from "../../assets/sql.svg";
import mysql from "../../assets/mysql.svg";
import django from "../../assets/django.svg";
import python from "../../assets/python.svg";
import pytorch from "../../assets/pytorch.svg";
import tensorflow from "../../assets/tensorflow.svg";
import airflow from "../../assets/airflow.svg";
import docker from "../../assets/docker.svg";
import azure from "../../assets/azure.svg";
import typescript from "../../assets/typescript.svg";
import powerBi from "../../assets/power-bi.svg";
import r from "../../assets/r.svg";

const Skills = () => {
  const skillsData = {
    frontend: [
      { name: "HTML", img: html },
      { name: "CSS", img: css },
      { name: "JavaScript", img: javascript },
      { name: "Typescript", img: typescript },
      { name: "ReactJS", img: react },
      { name: "TailwindCSS", img: tailwind },
      { name: "Figma", img: figma },
    ],
    backend: [
      { name: "PHP", img: php },
      { name: "NodeJS", img: nodejs },
      { name: "SQL", img: sql },
      { name: "MySQL", img: mysql },
      { name: "Django", img: django },
    ],
    dataScience: [
      { name: "Python", img: python },
      { name: "Pytorch", img: pytorch },
      { name: "TensorFlow", img: tensorflow },
      { name: "Apache Airflow", img: airflow },
      { name: "Docker", img: docker },
      { name: "Azure", img: azure },
      { name: "Power Bi", img: powerBi },
      { name: "R", img: r },
    ],
  };

  return (
    <section className={styles.skillsSection}>
      <h2>Habilidades técnicas</h2>
      <div className={styles.skillsBox}>
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h3>
            <div className={styles.skillsContainer}>
              {skills.map((skill, index) => (
                <div key={index} className={styles.skillItem}>
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className={styles.skillIcon}
                  />
                  <span className={styles.skillName}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
