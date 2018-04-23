import React from 'react';
import PropTypes from 'prop-types';

import styles from './validationError.less';

const Error = ({ error }) => (
  error && (
    <span className={styles.error}>
      {error}
    </span>
  )
);

Error.defaultProps = {
  error: null,
};

Error.propTypes = {
  error: PropTypes.string,
};

export default Error;
