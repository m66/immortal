import { services } from "../../constants/const";

import styles from "./services.module.scss";

function Services() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.headerBg}></div>
      </header>
      <div className={styles.services}>
        <ol>
          {services.map((i) => {
            return (
              <li>
                <a href="#">{i}</a>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default Services;
