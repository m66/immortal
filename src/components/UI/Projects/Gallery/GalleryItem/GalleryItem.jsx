import styles from "./galleryItem.module.scss";

function GalleryItem({ itemInfo, openModalId, setOpenModalId, onClose }) {

  return (
    <div
      className={[
        styles.galleryItem,
        openModalId === itemInfo.id ? styles.mb300 : styles.mb0,
      ].join(" ")}
      key={itemInfo.id}
      onClick={() => {
        setOpenModalId(itemInfo.id);
      }}
    >
      <img
        src={require(`../../../../../assets/images/galery/${itemInfo.url}.png`)}
        alt={itemInfo.title}
      />
      {openModalId === itemInfo.id ? (
        <div className={styles.galleryContent}>
          <div className={styles.galleryContentBody}>
            <div className={styles.galleryContentClose} onClick={onClose}>
              <div className={styles.closeBtn}></div>
              <span>Close</span>
            </div>
            <div className={styles.galleryContentInner}>
              <div className={styles.galleryContentTitle}>{itemInfo.title}</div>
              {/* <div className={styles.galleryContentTxt}>{textInfo}</div> */}
            </div>
          </div>
        </div>
      ) : null}
      {/* <ImgModal itemInfo={itemInfo} />  */}
    </div>
  );
}

export default GalleryItem;
