import React from 'react';
import PropTypes from 'prop-types';

import styles from './cookieNotice.less';

const CookieNotice = ({ hideCookieNotice }) => (
  <div className={styles.cookieNotice}>
    This website uses cookies to give you the best user experience,
    by continuing to use the site you are agreeing to our use of cookies.
    <button onClick={hideCookieNotice}>Close</button>
  </div>
);

CookieNotice.propTypes = {
  hideCookieNotice: PropTypes.func.isRequired,
};

export default CookieNotice;
