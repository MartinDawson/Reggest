import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import styles from './errorPage.less';

const ErrorPage = ({ status, error }) => (
  <div className={styles.errorPage}>
    <Helmet>
      <title>Error {status}</title>
      <meta name="robots" content="noindex" />
    </Helmet>
    <h1>Error {status}</h1>
    <div className={styles.error}>
      <div>
        {error}
      </div>
      We have been notified of the error ¯\_(ツ)_/¯. Please try again later.
    </div>
  </div>
);

ErrorPage.defaultProps = {
  error: 'An unknown error has occured.',
};

ErrorPage.propTypes = {
  status: PropTypes.number.isRequired,
  error: PropTypes.string,
};

export default ErrorPage;
