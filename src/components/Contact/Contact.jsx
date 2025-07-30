import { useRef, useState } from "react";
import styles from "./Contact.module.css";
import emailjs from "emailjs-com";

export const Contact = () => {
    const form = useRef();
    const [messageSent, setMessageSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_dnx0zsm", 
            "template_tlaj918",
            form.current,
            "IBdpeOZjWTfagAV1y"
        ).then(
            (result) => {
                console.log(result.text);
                setMessageSent(true);
                form.current.reset();
            },
            (error) => {
                console.log(error.text);
            }
        );
    };

    return (
        <section className={styles.contactSection}>
            <h2 className={styles.heading}>Get in Touch</h2>
            <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
                <input type="text" name="user_name" placeholder="Your Name" required />
                <input type="email" name="user_email" placeholder="Your Email" required />
                <input type="text" name="subject" placeholder="Subject" required />
                <textarea name="message" placeholder="Your Message" required rows="6" />
                <button type="submit">Send Message</button>
                {messageSent && <p className={styles.success}>Message sent successfully!</p>}
            </form>
        </section>
    );
};

