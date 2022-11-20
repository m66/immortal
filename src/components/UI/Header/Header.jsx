import styles from "./header.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerCaption}>
        <p>
          <strong>
            <span className={styles.headerCaptionHightlight}>Hype</span> is
            temporary, quality is{" "}
            <span className={styles.headerCaptionHightlight}>Immortal</span>
          </strong>
        </p>
      </div>
    </div>
  );
}

export default Header;
