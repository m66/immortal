import { useParallax } from "react-scroll-parallax";
import Gallery from "./Gallery/Gallery";

import floatingImg from '../../../assets/images/left-floating-box/welcometoweb3_resized_5aad43ee383affbee5cd4b49bea224c14025e7d0.png';

import styles from "./projects.module.scss";

function Projects() {
  const { ref } = useParallax({ speed: 70 });

  return (
    <section className={styles.projectsSection}>
      <div ref={ref} className={styles.leftFloatingBox}>
        <img src={floatingImg} alt="" />
      </div>

      <div className={styles.projectsWrapper}>
        <div className={styles.projectsCaption}>
          <div className={styles.projectsCaptionTitle}>
            web2 and web3 projects
          </div>
          <div className={styles.projectsCaptionDiscription}></div>
        </div>

        <Gallery />
      </div>
    </section>
  );
}

export default Projects;
