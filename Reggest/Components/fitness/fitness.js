import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import QAndA from '../qAndA/qAndAContainer';
import FitnessPlans from './fitnessPlansContainer';
import styles from './fitness.less';

const Fitness = ({
  data,
  getNextQuestion,
}) => (
  <div className={styles.fitness}>
    <Helmet>
      <title>Suggests fitness plans for you based on your goals</title>
      <meta name="description" content="Starting Strength, Strong Lifts 5x5, Strong Curves, Nsuns and lots more certified fitness plans designed for your goals." />
    </Helmet>
    <div>
      <div>
        <div className={styles.title}>
          <div>let&apos;s suggest a lifting plan for you.</div>
          <div>simply answer a few questions...</div>
        </div>
        <QAndA question={data.questionByIndex} getNextQuestion={getNextQuestion} />
        <div className={styles.title}>or see all certified lifting plans</div>
        <div className={styles.fitnessPlans}>
          <ul>
            <FitnessPlans data={data} />
          </ul>
        </div>
      </div>
    </div>
  </div>
);

Fitness.propTypes = {
  getNextQuestion: PropTypes.func.isRequired,
  data: PropTypes.shape({
    questionByIndex: PropTypes.object,
  }).isRequired,
};

export default Fitness;
