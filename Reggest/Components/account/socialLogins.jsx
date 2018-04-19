import React from 'react';
import PropTypes from 'prop-types';

import styles from './socialLogins.less';
import { hr } from '../../../shared/modal/modal.less';
import SocialLoginsButton from './socialLoginsButton';

const SocialLogins = ({ loginProviders }) => (
  <form action="account/externalLogin" method="post">
    <input type="hidden" name="returnUrl" value={window.location.pathname} />

    <div className={styles.socialLogins}>
      {
        loginProviders.map(loginProvider => (
          <SocialLoginsButton
            key={loginProvider.name}
            {...loginProvider}
          />
        ))
      }
    </div>
    <hr className={hr} />
  </form>
);

SocialLogins.defaultProps = {
  loginProviders: [],
};

SocialLogins.propTypes = {
  loginProviders: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default SocialLogins;
