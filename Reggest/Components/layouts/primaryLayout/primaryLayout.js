import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'found';

import styles from './primaryLayout.less';
import CookieNotice from '../../footer/cookieNoticeContainer';
import PrimaryLayoutErrorBoundary from './primaryLayoutErrorBoundary';
import DisplayType from '../../shared/displayType';
import Footer from '../../footer/footer';
import Popups from '../../shared/popup/popupsContainer';

const PrimaryLayout = ({
  children,
}) => (
  <DisplayType>
    {(displayType) => {
      const displayTypeClassName = classnames(
        displayType.isMobile && 'mobile',
        displayType.isTablet && 'tablet',
        displayType.isDesktop && 'desktop',
      );

      return (
        <PrimaryLayoutErrorBoundary
          className={classnames(displayTypeClassName, styles.primaryLayout)}
        >
          <div className={styles.wrap}>
            <div className={styles.main}>
              <Link to="/" className={styles.reggest}>reggest</Link>
              {children}
            </div>
          </div>
          <Footer />
          <Popups />
          <CookieNotice />
        </PrimaryLayoutErrorBoundary>
      );
    }}
  </DisplayType>
);

PrimaryLayout.defaultProps = {
  children: null,
};

PrimaryLayout.propTypes = {
  children: PropTypes.node,
};

export default PrimaryLayout;
