import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";

import { faq } from "../../../../constants/const";

import styles from "./questionAccordion.module.scss";

function ContextAwareToggle({ children, eventKey, callback }) {
  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  return (
    <p type="button" onClick={decoratedOnClick}>
      {children}
    </p>
  );
}

function QuestionAccordion({ openId, setOpenId }) {
  return (
    <Accordion defaultActiveKey="0">
      {faq.map((qData) => (
        <ContextAwareToggle
          eventKey={qData.id}
          className={styles.faqItemQuestion}
        >
          <Card
            className={styles.faqItem}
            onClick={() => {
              setOpenId(prev => {
                return prev === qData.id ? null : qData.id
              });
            }}
          >
            <Card.Header className={styles.faqItemHeader}>
              {qData.question}
              <div className={[styles.faqItemBtn, openId === qData.id && styles.faqItemBtnRotate ].join(' ')}></div>
            </Card.Header>
            <Accordion.Collapse eventKey={qData.id}>
              <Card.Body>{qData.answer}</Card.Body>
            </Accordion.Collapse>
          </Card>
        </ContextAwareToggle>
      ))}
    </Accordion>
  );
}

export default QuestionAccordion;
