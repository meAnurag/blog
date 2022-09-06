import Link from "next/link";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { GrHomeRounded } from "react-icons/gr";
import { IoLogIn, IoLogOutOutline } from "react-icons/io5";
import { useSession, signOut } from "next-auth/react";

import styles from "../styles/nav.module.scss";
import Hamburger from "./Hamburger";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  const { status } = useSession();

  return (
    <>
      <header className={styles.header}>
        <span className={styles.title}>Polar</span>
        <Hamburger
          active={navOpen}
          onClick={() => setNavOpen((state) => !state)}
        />
      </header>
      <nav className={`${styles.nav} ${navOpen ? styles.mobile_navOpen : ""}`}>
        <span className={styles.brand}>
          <span className={styles.desktop_only}>P</span>
          <span className={styles.mobile_only}>Polar</span>
        </span>

        <Link href="/">
          <a
            data-title="Home"
            className={styles.item}
            onClick={() => setNavOpen(false)}
          >
            <GrHomeRounded className={styles.itemIcon} size={20} scale={1} />
            <span className={styles.mobile_only}>Home</span>
          </a>
        </Link>
        {status === "authenticated" ? (
          <Link href="/">
            <a
              className={styles.item}
              data-title="Sign out"
              onClick={() => {
                signOut();
                setNavOpen(false);
              }}
            >
              <IoLogOutOutline
                className={`${styles.itemIcon} ${styles.logOutIcon}`}
                size={20}
                scale={1}
                color="red"
                fill="red"
              />
              <span className={styles.mobile_only}>Log Out</span>
            </a>
          </Link>
        ) : (
          <Link href="/auth/signin">
            <a
              data-title="Sign In"
              className={styles.item}
              onClick={() => setNavOpen(false)}
            >
              <IoLogIn className={styles.itemIcon} size={20} scale={1} />
              <span className={styles.mobile_only}>Log In</span>
            </a>
          </Link>
        )}
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
