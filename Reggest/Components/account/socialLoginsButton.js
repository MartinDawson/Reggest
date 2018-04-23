import React from 'react';
import PropTypes from 'prop-types';

import styles from './socialLogins.less';

const SocialLoginsButton = ({ name, displayName }) => (
  <button
    className={styles.socialLoginProviderButton}
    value={name}
    name="provider"
    title={`Log in using your ${displayName} account`}
  >
    <img src={`/images/loginProviders/${name}_40.png`} alt={`${displayName} login`} />
  </button>
);

SocialLoginsButton.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
};

export default SocialLoginsButton;
