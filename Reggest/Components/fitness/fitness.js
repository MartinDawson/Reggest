import React from 'react';
import PropTypes from 'prop-types';

import QAndA from '../qAndA/qAndAContainer';
import styles from './fitness.less';

const Fitness = ({ question }) => (
  <div className={styles.fitness}>
    <div>
      <QAndA question={question} />
    </div>
  </div>
);

Fitness.propTypes = {
  question: PropTypes.object.isRequired,
};

export default Fitness;
