import React from 'react';

import QAndA from '../qAndA/qAndA';
import styles from './fitness.less';

const questionsAndAnswers = [
  {
    question: 'Are you looking for aesthetics or strength?',
    answers: [
      'aesthetics',
      'strength',
      'both',
    ],
  }, {
    question: 'Are you okay with using barbells?',
    answers: [
      'yes',
      'no',
    ],
  },
];

const Fitness = () => (
  <div className={styles.fitness}>
    <div>
      {questionsAndAnswers.map(questionAndAnswers =>
        <QAndA key={questionAndAnswers.question} {...questionAndAnswers} />)}
    </div>
  </div>
);

export default Fitness;
