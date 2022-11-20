import SimpleSlider from "./Carousel/Carousel";
import styles from "./carouselWrapper.module.scss";

function CarouselWrapper() {
  return (
    <section className={styles.carouselSection}>
      <div className={styles.container}>
        <div className={styles.title}>Shaping FUTURE of Web3</div>
        <div className={styles.action}>What We Do</div>
        <div className={styles.carousel}>
          <SimpleSlider />
        </div>
        <div className={styles.mainText}>
          <p>Who we are working with?</p>
        </div>
      </div>
    </section>
  );
}

export default CarouselWrapper;
