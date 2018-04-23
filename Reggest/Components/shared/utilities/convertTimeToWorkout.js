import pluralize from 'pluralize';

export default (time) => {
  let newTime = '';

  if (time.hours) {
    newTime += pluralize('hour', time.hours, true);

    if (time.minutes) {
      newTime += ' ';
    }
  }

  if (time.minutes) {
    newTime += pluralize('minute', time.minutes, true);
  }

  return newTime;
};
