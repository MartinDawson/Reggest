import React from 'react';
import PropTypes from 'prop-types';

import styles from './qAndA.less';

const QAndA = ({ questionText, answers, answerOnClick }) => (
  <div className={styles.qAndA}>
    <div className={styles.question}>{questionText}</div>
    <div className={styles.answers}>
      {answers.map(answer => (
        <div key={answer.answerId} className={styles.answerContainer}>
          <button
            className={styles.answer}
            onClick={() => answerOnClick(answer.answerId)}
          >
            {answer.answerText}
          </button>
        </div>
      ))}
    </div>
  </div>
);

QAndA.propTypes = {
  questionText: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      answerId: PropTypes.instanceOf.isRequired,
      points: PropTypes.number.isRequired,
      answerText: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  answerOnClick: PropTypes.func.isRequired,
};

export default QAndA;
