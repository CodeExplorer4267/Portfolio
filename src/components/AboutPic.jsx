import image from "./devimg.png";
import styles from "./AboutPic.module.css";
function About() {
  return (
    <>
      <div className={styles.container}>
        <div className="AboutMe">
          <h2 className={styles.intro}>
            <div>Hi,My name is <span className={styles.name}>Rupam</span></div>
            <div>and,I am a Web Developer</div>
          </h2>
        </div>
        <div className={styles.picture}>
          <img src={image} alt="Error" />
        </div>
      </div>
    </>
  );
}
export default About;
