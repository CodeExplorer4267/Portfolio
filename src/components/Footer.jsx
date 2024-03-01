import styles from "./Footer.module.css";
import image1 from "./facebookicon.ico"
import image2 from "./instalogo.png"
import image3 from "./linkedinicon.png"
function Footer() {
  return (
    <>
      <footer className={styles.footerContainer}>
        <h1>RUPAM</h1>
        <br />
        <div className="imageContainer">
            <img src={image1} alt="" className={styles.footerimage}/>
          <a href="https://www.instagram.com/rupambhadra004"><img src={image2}alt="" className={styles.footerimage} /></a>
          <a href="https://www.linkedin.com/in/rupam-bhadra-52b8182b0"><img src={image3} alt="" className={styles.footerimage} /></a>
        </div>
        copyright reserved <br />
      </footer>
    </>
  );
}
export default Footer;
