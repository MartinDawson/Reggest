import React from 'react';
import PropTypes from 'prop-types';

class CookieNotice extends React.Component {
  componentDidMount() {
    const cookieNoticeShown = localStorage.getItem('cookieNoticeShown');

    if (!cookieNoticeShown) {
      this.props.showPopup('This website uses cookies to give you the best user experience, by continuing to use the site you are agreeing to our use of cookies.', 15000);

      localStorage.setItem('cookieNoticeShown', true);
    }
  }
  render() {
    return null;
  }
}

CookieNotice.propTypes = {
  showPopup: PropTypes.func.isRequired,
};

export default CookieNotice;
