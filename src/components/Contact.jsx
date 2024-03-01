import styles from "./Contact.module.css";

function Contact() {
  return (
    <>
      <div className={styles.ContactContainer}>
        <div className={styles.Contact1}>
          <h2 className={styles.ContactHeading}>Contact Me</h2>
          <a href="https://mail.google.com/">
            <div className={styles.email}>
              <p>rupambhadra478@gmail.com</p>
              <p>Mail</p>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/rupam-bhadra-52b8182b0">
            <div className={styles.linkedin}>
              <p>Linkedin</p>
            </div>
          </a>
          <a href="https://www.instagram.com/rupambhadra004">
            <div className={styles.insta}>
              <p>Instagram</p>
            </div>
          </a>
        </div>
        <div className={styles.Contact2}>
          <input type="text" placeholder="Enter Name" />
          <input type="text" placeholder="Enter PhoneNo." />
          <input
            type="text"
            placeholder="Enter your thoughts"
            id={styles.Thought}
          />
          <button id={styles.contactButton}>Let's Chat</button>
        </div>
      </div>
    </>
  );
}
export default Contact;
