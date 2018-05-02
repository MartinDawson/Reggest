import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import QAndA from '../qAndA/qAndAContainer';
import FitnessPlans from './fitnessPlansContainer';
import styles from './fitness.less';
import womanWorkoutImage from '../../wwwroot/images/womanWorkout.jpg';

const shareUrl = window.location.origin;

const ogTitle = '10 simple questions to find the best fitness plan for you. Take the quiz now.';
const ogDescription = 'Not sure what program or routine to do at the gym? Take the fitness quiz to get a fitness plan which best suits your goals.';

const Fitness = ({
  data,
  getNextQuestion,
}) => (
  <div className={styles.fitness}>
    <Helmet>
      <title>Suggests a fitness plan for you based on your goals</title>
      <meta name="description" content="Starting Strength, Strong Lifts 5x5, Strong Curves, Nsuns and lots more certified fitness plans designed for your goals." />
      <meta name="twitter:card" content="app" />
      <meta name="twitter:site" content="@ReggestOfficial" />
      <meta itemProp="name" content={ogTitle} />
      <meta itemProp="description" content={ogDescription} />
      <meta itemProp="image" content={window.location.origin + womanWorkoutImage} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:url" content={shareUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={window.location.origin + womanWorkoutImage} />
      <meta property="og:site_name" content="Reggest.com" />
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
