/* eslint-disable react/prop-types */


import styles from "./ProjectCard.module.css";
import { useState } from "react";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className={styles.container}>
      <img
        src={imageSrc}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={`${styles.description} ${showMore ? styles.expanded : ""}`}>
        {description}
      </p>
      <button
        className={styles.readMoreBtn}
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Read Less" : "Read More"}
      </button>

      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>

      <div className={styles.links}>
        <a href={demo} className={styles.link} target="_blank" rel="noreferrer">
          Demo
        </a>
        <a href={source} className={styles.link} target="_blank" rel="noreferrer">
          Source
        </a>
      </div>
    </div>
  );
};