import { useEffect, useRef } from "react";
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";

export const Skills = () => {
  const skillsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
          }
        });
      },
      { threshold: 0.4 } // trigger when 40% visible
    );

    skillsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillHeader}>
                <p>{skill.title}</p>
                <span>{skill.level}%</span>
              </div>
              <div className={styles.progressBar}>
                <div
                  ref={(el) => (skillsRef.current[id] = el)}
                  className={styles.progress}
                  style={{ "--progress-width": `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
