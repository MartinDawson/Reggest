import React from 'react';
import PropTypes from 'prop-types';

import styles from './pageContent.less';

const PageContent = ({ children }) => (
  <div className={styles.pageContent}>
    {children}
  </div>
);

PageContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContent;
