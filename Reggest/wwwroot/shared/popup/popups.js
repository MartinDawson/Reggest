import React from 'react';
import PropTypes from 'prop-types';

import Popup from './popup';
import styles from './popups.less';

const Popups = ({ popups, hidePopup }) => (
  popups.length > 0 ? (
    <div className={styles.popups}>
      {popups.map((popup, index) => (
        <Popup
          key={popup.id}
          index={index}
          text={popup.text}
          hidePopup={hidePopup}
          millisecondsToShow={popup.millisecondsToShow}
        />
      ))}
    </div>)
    : null
);

Popups.propTypes = {
  hidePopup: PropTypes.func.isRequired,
  popups: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    millisecondsToShow: PropTypes.number.isRequired,
  })).isRequired,
};

export default Popups;
