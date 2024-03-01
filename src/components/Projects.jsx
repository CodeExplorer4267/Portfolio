import styles from "./Projects.module.css"
import styles2 from "./Card.module.css"
import Card from "./Card";
import image from "./Weather_logo.webp"
import image2 from "./to-do-list_projectimg.png"
import image3 from "./Dictionary.jpg"
import image4 from "./242.jpg"
function Projects(){
    return <>
     <div className={styles.ProjectsContainer}>
        <h2 id={styles.ProjectHeading}>Project</h2>
        <div className={styles.cardContainer}>
        <Card>
        <h2 id={styles2.CardHeading}>Weather App</h2>
        <img src={image} alt="Weather app image" className={styles.image} />
        <a href="https://codeexplorer4267.github.io/Weather_app/"><button className={styles.buttons}>Live Demo</button></a>
        <a href="https://github.com/CodeExplorer4267/Weather_app.git"><button className={styles.buttons}>Code</button></a>
        </Card>
        <Card>
        <h2 id={styles2.CardHeading}>To-Do-List App</h2>
        <img src={image2} alt="To-Do-List image" className={styles.image} />
        <a href="https://codeexplorer4267.github.io/To-Do-List/"><button className={styles.buttons}>Live Demo</button></a>
        <a href="https://github.com/CodeExplorer4267/To-Do-List"><button className={styles.buttons}>Code</button></a>
        </Card>
        <Card>
        <h2 id={styles2.CardHeading}>Dictionary App</h2>
        <img src={image3} alt="Dictionary image" className={styles.image} />
        <a href="https://codeexplorer4267.github.io/Dictionary/"><button className={styles.buttons}>Live Demo</button></a>
        <a href="https://github.com/CodeExplorer4267/Dictionary"><button className={styles.buttons}>Code</button></a>
        </Card>
        <Card>
        <h2 id={styles2.CardHeading}>Tic-Tac-Toe</h2>
        <img src={image4} alt="Dictionary image" className={styles.image} />
        <a href="https://codeexplorer4267.github.io/TicTacToe/"><button className={styles.buttons}>Live Demo</button></a>
        <a href="https://github.com/CodeExplorer4267/TicTacToe"><button className={styles.buttons}>Code</button></a>
        </Card>
        </div>
        
     </div>
    </>
}
export default Projects;