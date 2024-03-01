import image from "./file.jpg"
import styles from "./Myimage.module.css"

function Myimage(){
  return <>
     <img src={image} alt="Error" className={styles.Myimage}/>
     <div className={styles.buttonContainer}>
     <button id={styles.btn1}>Download CV</button>
     <a href="https://github.com/CodeExplorer4267">
    <button id={styles.btn2}>Visit Github</button></a>
     </div>
     
  </>
}
export default Myimage;