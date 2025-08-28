
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="./assets/message.png" alt="Email icon" />
          <a href="mailto:gajulapallisailakshmi@gmail.com">gajulapallisailakshmi@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src="assets/linkedin.png"
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/sailakshmi-gajulapalli-4a05b2280">linkedin.com/sailakshmi-gajulapalli</a>
        </li>
        <li className={styles.link}>
          <img src="assets/github.png" alt="Github icon" />
          <a href="https://www.github.com/sailakshmi-0987">github.com/sailakshmi-0987</a>
        </li>
      </ul>
    </footer>
  );
};