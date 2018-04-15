import React from 'react';
import PropTypes from 'prop-types';

import styles from './qAndA.less';

const QAndA = ({ question, answers }) => (
  <div className={styles.qAndA}>
    <div className={styles.question}>{question}</div>
    <div className={styles.answers}>
      {answers.map(answer => (
        <div className={styles.answerContainer}>
          <button key={answer} className={styles.answer}>{answer}</button>
        </div>
      ))}
    </div>
  </div>
);

QAndA.propTypes = {
  question: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

export default QAndA;
