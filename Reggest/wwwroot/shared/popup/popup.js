import React from 'react';
import PropTypes from 'prop-types';

import styles from './popup.less';

class Popup extends React.Component {
  componentDidMount() {
    setTimeout(() => this.props.hidePopup(this.props.index), this.props.millisecondsToShow);
  }
  render() {
    return (
      <div className={styles.popup}>
        {this.props.text}
      </div>
    );
  }
}

Popup.propTypes = {
  index: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  hidePopup: PropTypes.func.isRequired,
  millisecondsToShow: PropTypes.number.isRequired,
};

export default Popup;
