import Link from "next/link";
import styles from "../styles/nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <span className={styles.brand}>Polar</span>

      <Link href="/">
        <a className={styles.item}>Home</a>
      </Link>
    </nav>
  );
};

export default Nav;
