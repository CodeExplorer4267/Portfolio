import styles from "./AboutMe.module.css"
import image from "./exp.png"
import image2 from "./project_symbol.png"
function AboutMe(){
    return <div className={styles.container}>
        <h2 id={styles.heading}>About Me</h2>
        <div>
            <p className={styles.about}>Hello,everyone! I am <span className={styles.name}>Rupam</span>,deeply passionate about full stack web development.I am also a C++ problem solver, using my skills to solve real-world problems</p>
            <br />
            <p className={styles.about}>I am currently pursuing my B.Tech in Information Technology.I'm currently in my 2nd year.
            </p>
            <div className={styles.Expro}>
                <div className={styles.Exp}>
                    <img src={image} alt="Error" id={styles.expimg} />
                   Experience 1+years
                </div>
                <div className={styles.Pro}>
                    <img src={image2} alt="Error" id={styles.proimg} />
                   Projects 5+
                </div>
            </div>
        </div>
    </div>
}
export default AboutMe;