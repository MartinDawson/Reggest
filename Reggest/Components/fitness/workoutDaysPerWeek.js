import React from 'react';
import PropTypes from 'prop-types';
import pluralize from 'pluralize';

import styles from './workoutDaysPerWeek.less';

const format = (workoutDaysPerWeek) => {
  if (workoutDaysPerWeek.length === 1) return pluralize('day', workoutDaysPerWeek[0], true);

  const formatedString = workoutDaysPerWeek.map((workoutDayPerWeek, i) => {
    if (i === workoutDaysPerWeek.length - 2) return workoutDayPerWeek;
    if (i === workoutDaysPerWeek.length - 1) return ` or ${workoutDayPerWeek} days`;

    return `${workoutDayPerWeek}, `;
  });

  return formatedString;
};

const WorkoutDaysPerWeek = ({
  workoutDaysPerWeek,
}) => (
  <span className={styles.workoutDayPerWeek}>
    {format(workoutDaysPerWeek)}
  </span>
);

WorkoutDaysPerWeek.propTypes = {
  workoutDaysPerWeek: PropTypes.arrayOf(
    PropTypes.number.isRequired,
  ).isRequired,
};

export default WorkoutDaysPerWeek;
