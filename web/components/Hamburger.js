import styles from "../styles/hamburger.module.scss";

const Hamburger = ({ active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${styles.box} ${active ? styles.active : ""}`}
    >
      <div />
      <div />
      <div />
    </div>
  );
};

export default Hamburger;
