import React from 'react';
import PropTypes from 'prop-types';

import styles from './qAndA.less';

const QAndA = ({ questionText, answers }) => (
  <div className={styles.qAndA}>
    <div className={styles.question}>{questionText}</div>
    <div className={styles.answers}>
      {answers.map(answer => (
        <div key={answer.answerText} className={styles.answerContainer}>
          <button className={styles.answer}>{answer.answerText}</button>
        </div>
      ))}
    </div>
  </div>
);

QAndA.propTypes = {
  questionText: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      answerText: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default QAndA;
