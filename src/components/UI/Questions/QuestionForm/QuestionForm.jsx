import styles from "./questionForm.module.scss";

function QuestionForm() {
  return (
    <form action="">
      <div className={styles.questionFormTitle}>
        <marquee>
          Immortal Inc is unique required partner for you to enter web3
        </marquee>
      </div>
      <div className={styles.questionFormContainer}>
        <div className={styles.formItems}>
            <div className={styles.formItem}>
                <input type="text" placeholder="Email"/>
            </div>
            <div className={styles.formItem}>
                <input type="text" placeholder="Message"/>
            </div>
            <button className={styles.questionsFormBtn}>
                <span>Send</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" fill="none" className="svg ico replaced-svg"><path d="M.564 9.47c-.68-.274-.672-.68.045-.92L26.057.069c.706-.235 1.11.16.912.85l-7.272 25.449c-.2.705-.633.737-.956.093l-6.074-12.15L.564 9.47Zm6.52-.267 7.515 3.006 4.053 8.11L23.38 3.772 7.083 9.202h.001Z" fill="#fff"></path></svg>
            </button>
        </div>
      </div>
    </form>
  );
}

export default QuestionForm;