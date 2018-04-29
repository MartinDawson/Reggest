import React from 'react';
import PropTypes from 'prop-types';

import styles from './fitnessPlansRanked.less';
import FitnessPlans from './fitnessPlansContainer';

const FitnessPlansRanked = ({ data }) => (
  <div>
    <div className={styles.title}>
      <div>Your suggested lifting plans.</div>
    </div>
    <div className={styles.fitnessPlans}>
      <ol>
        <FitnessPlans data={data} />
      </ol>
    </div>
  </div>
);

FitnessPlansRanked.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FitnessPlansRanked;
