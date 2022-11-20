import styles from './imgModal.module.scss';

function ImgModal({modalInfo}) {
    // let textInfo = modalInfo?.texts?.map(t => {
    //     switch(t.elemType) {
    //         case 'li':
    //             return <ul>
    //                 <li>{t.text}</li>
    //             </ul>
    //         case 'strong':
    //             return <strong>{t.text}</strong>
    //         default:
    //             return <p>{t.text}</p>
    //     }
    // })

    console.log(modalInfo);
    return (
        <div className={styles.galleryContent}>
            <div className={styles.galleryContentBody}>
                <div className={styles.galleryContentClose}>
                    <div className={styles.closeBtn}></div>
                    <span>Close</span>
                </div>
                <div className={styles.galleryContentInner}>
                    <div className={styles.galleryContentTitle}>
                        {
                            modalInfo.title
                        }
                    </div>
                    <div className={styles.galleryContentTxt}>
                        {
                            textInfo
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImgModal;