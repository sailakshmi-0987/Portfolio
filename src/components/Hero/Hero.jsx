import styles from "./Hero.module.css";
export const Hero =()=>{
    return( 
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I am Sailakshmi Gajulapalli</h1>
            <p className={styles.description}>
            a passionate full-stack developer specializing in MERN stacks. 
            I love building scalable backend systems and dynamic mobile applications. 
            With a keen eye for problem-solving and performance optimization, I strive to create seamless digital experiences.
            </p>
        <a href="mailto:gajulapallisailakshmi@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img className={styles.heroimg} src="/assets/me1.png"/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
    ); 
}