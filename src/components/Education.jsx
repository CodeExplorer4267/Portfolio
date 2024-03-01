import styles from "./Education.module.css";
function Education() {
  return (
    <>
      <div className={styles.Educontainer}>
        <h2 id={styles.Eduheading}>Education</h2>
        <div className={styles.schcoll}>
          <div className={styles.school}>
            <h3>Barasat Mahatma Gandhi Memorial High School</h3>
            <p id={styles.date}>Jan 2014- Mar 2022</p>
          </div>
          <div className={styles.college}>
            <h3>MAKAUT</h3>
            <p id={styles.clgdate}>2022-Present</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Education;
