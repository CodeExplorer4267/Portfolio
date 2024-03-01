import styles from "./Skills.module.css";
function Skills() {
  return (
    <>
      <div className={styles.skillsContainer}>
        <h2 id={styles.skillHeading}>Skills</h2>
        <div className={styles.skill}>
          <div className="skillName">HTML</div>
          <div className={styles.skillBar}>
            <div className={styles.skillPer}></div>
          </div>
          <span className={styles.skillpercentage}>85%</span>
        </div>
        <div className={styles.skill}>
          <div className={styles.skill2Name}>CSS</div>
          <div className={styles.skill2Bar}>
            <div className={styles.skill2Per}></div>
          </div>
          <span className={styles.skill2percentage}>75%</span>
        </div>
        <div className={styles.skill}>
          <div className={styles.skill3Name}>JS</div>
          <div className={styles.skill3Bar}>
            <div className={styles.skill3Per}></div>
          </div>
          <span className={styles.skill3percentage}>73%</span>
        </div>
        <div className={styles.skill}>
          <div className={styles.skill4Name}>React</div>
          <div className={styles.skill4Bar}>
            <div className={styles.skill4Per}></div>
          </div>
          <span className={styles.skill4percentage}>62%</span>
        </div>
        <div className={styles.skill}>
          <div className={styles.skill5Name}>C</div>
          <div className={styles.skill5Bar}>
            <div className={styles.skill5Per}></div>
          </div>
          <span className={styles.skill5percentage}>87%</span>
        </div>
        <div className={styles.skill}>
          <div className={styles.skill6Name}>C++</div>
          <div className={styles.skill6Bar}>
            <div className={styles.skill6Per}></div>
          </div>
          <span className={styles.skill6percentage}>81%</span>
        </div>
      </div>
    </>
  );
}
export default Skills;
