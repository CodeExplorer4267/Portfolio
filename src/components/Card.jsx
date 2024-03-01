import styles from "./Card.module.css";
function Card(props) {
  return (
    <>
      <div className={styles.CardContainer}>
        {props.children}
      </div>
    </>
  );
}
export default Card;
