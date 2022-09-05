import Link from "next/link";
import { useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import { GrHomeRounded } from "react-icons/gr";

import styles from "../styles/nav.module.scss";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {}, []);

  return (
    <>
      <header className={styles.header}>
        <span className={styles.title}>Polar</span>
        <BiMenu
          size={20}
          onClick={() => setNavOpen((state) => !state)}
          className={styles.burgerMenu}
        />
      </header>
      <nav className={`${styles.nav} ${navOpen ? styles.mobile_navOpen : ""}`}>
        <span className={styles.brand}>P</span>

        <Link href="/">
          <a className={styles.item}>
            <GrHomeRounded className={styles.itemIcon} size={20} scale={1} />
          </a>
        </Link>
      </nav>
      <span
        onClick={() => setNavOpen(false)}
        className={`${styles.whiteRegion} ${
          navOpen ? styles.whiteRegion_visible : styles.whiteRegion_none
        }`}
      />
    </>
  );
};

export default Nav;
