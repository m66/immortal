import { useState } from "react";

import QuestionForm from "./QuestionForm/QuestionForm";
import QuestionAccordion from "./QuestionAccordion/QuestionAccordion";

import styles from "./questions.module.scss";

function Questions() {
  const [openId, setOpenId] = useState(null);
  console.log(openId)
  return (
    <section className={styles.questionSection}>
      <div className={styles.container}>
        <div className={styles.containerTitle}>Frequently Asked Questions</div>
        <div className={styles.faq}>
          <QuestionAccordion openId={openId} setOpenId={setOpenId} />
        </div>
      </div>
      <QuestionForm />
    </section>
  );
}

export default Questions;
