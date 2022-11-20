import { useState } from "react";

import GalleryItem from "./GalleryItem/GalleryItem";
import { galeryImgs } from "../../../../constants/const";

import styles from "./gallery.module.scss";

function Gallery() {
  const [openModalId, setOpenModalId] = useState(null);

  const onClose = () => {
    setOpenModalId(555);
    // console.log(5555)
  };

  console.log(openModalId);
  return (
    <div className={styles.projectsGallery}>
      {galeryImgs.map((itemInfo) => (
        <GalleryItem
          itemInfo={itemInfo}
          openModalId={openModalId}
          setOpenModalId={setOpenModalId}
          onClose={onClose}
        />
      ))}
    </div>
  );
}

export default Gallery;
