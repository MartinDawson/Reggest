import React from 'react';

import QAndA from '../qAndA/qAndAContainer';
import styles from './fitness.less';

const Fitness = props => (
  <div className={styles.fitness}>
    <div>
      <QAndA data={props} />
    </div>
  </div>
);

export default Fitness;
