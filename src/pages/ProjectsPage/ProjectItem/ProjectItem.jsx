import { Link } from 'react-router-dom';

import styles from "./projectItem.module.scss";

function ProjectItem({piData}) {
  return (
    <Link className={styles.projectLink}>
      <img src={piData.url} alt={piData.title} />
      <div className={styles.projectCaption}>
        <p className={styles.projectTitle}>{piData.title}</p>
        <p className={styles.projectDiscription}>{piData.discription}</p>
      </div>
    </Link>
  );
}

export default ProjectItem;