import React from 'react';
import PropTypes from 'prop-types';

import QAndA from '../qAndA/qAndAContainer';
import FitnessPlans from './fitnessPlansContainer';
import styles from './fitness.less';
import FitnessPlansRanked from '../fitness/fitnessPlansRankedContainer';

const Fitness = props => (
  <div className={styles.fitness}>
    <div>
      {props.hasQuestion ? (
        <div>
          <div className={styles.title}>
            <div>let&apos;s suggest a lifting plan for you.</div>
            <div>simply answer a few questions...</div>
          </div>
          <QAndA question={props.data.questionByIndex} getNextQuestion={props.getNextQuestion} />
          <div className={styles.title}>or see all certified lifting plans</div>
          <FitnessPlans data={props.data} />
        </div>
      ) : (
        <div>
          <div className={styles.title}>
            <div>Your suggested lifting plans.</div>
          </div>
          <FitnessPlansRanked />
        </div>
      )}
    </div>
  </div>
);

Fitness.propTypes = {
  hasQuestion: PropTypes.bool.isRequired,
  getNextQuestion: PropTypes.func.isRequired,
  data: PropTypes.shape({
    questionByIndex: PropTypes.object,
  }).isRequired,
};

export default Fitness;
