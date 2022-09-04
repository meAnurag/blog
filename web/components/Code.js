import styles from "../styles/code.module.scss";

const Code = ({ code }) => {
  require("highlight.js/styles/stackoverflow-dark.css");

  return (
    <div
      className={styles.container}
      dangerouslySetInnerHTML={{ __html: `<pre>${code}</pre>` }}
    />
  );
};

export default Code;
