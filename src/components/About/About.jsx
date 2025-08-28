import { useState } from "react";
import styles from "./About.module.css";

export const About = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img
                    src="assets/24325547_2022_ani_cartoon_28-removebg-preview 1.png"
                    alt="About"
                    className={styles.aboutImg}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src="/assets/image 2.png" alt="cursor icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>
                                I craft responsive, user-friendly, and accessible websites 
                                with modern frameworks and performance in mind.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src="/assets/image 3.png" alt="server icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>
                                I build secure and scalable back-end systems and APIs 
                                that ensure smooth integration with the frontend.
                            </p>
                        </div>
                    </li>
                    {expanded && (
                        <li className={`${styles.aboutItem} ${styles.extra}`}>
                            <img src="/assets/image 4.png" alt="teamwork icon"/>
                            <div className={styles.aboutItemText}>
                                <h3>Problem Solver & Collaborator</h3>
                                <p>
                                    Beyond coding, I thrive on solving real-world problems 
                                    and collaborating with teams to create impactful digital experiences.  
                                    My focus is not just on writing code, but on building 
                                    products that make a difference.
                                </p>
                            </div>
                        </li>
                    )}
                </ul>

                <button 
                    className={styles.readMoreBtn} 
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? "Show Less ▲" : "Read More ▼"}
                </button>
            </div>
        </section>
    );
};
