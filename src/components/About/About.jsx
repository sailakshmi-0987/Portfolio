import styles from "./About.module.css";
export const About =()=>{
    return(
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
                                I am a frontend developer with experience in building responsive and optimized sites.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src="/assets/image 3.png" alt="server icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>
                                I have experience developing fast and optimized back-end systems end APIs.
                            </p>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </section>
    );
};