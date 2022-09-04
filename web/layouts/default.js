import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

import styles from "../styles/main.module.scss";

export const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};
