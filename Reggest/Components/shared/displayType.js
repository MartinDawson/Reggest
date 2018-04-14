import React from 'react';
import PropTypes from 'prop-types';

import sizes from './sizes';

class DisplayType extends React.Component {
  state = {
    displayType: 'desktop',
  }

  componentWillMount() {
    window.addEventListener('resize', this.updateDisplayType);
    this.updateDisplayType();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDisplayType);
  }

  getDisplayType = (windowWidth) => {
    if (windowWidth < sizes.breakpointMobile.value) {
      return 'mobile';
    }

    if (windowWidth < sizes.breakpointTablet.value) {
      return 'tablet';
    }

    return 'desktop';
  }

  updateDisplayType = () => {
    const windowWidth = document.body.getBoundingClientRect().width;
    const displayType = this.getDisplayType(windowWidth);

    if (displayType !== this.state.displayType) {
      this.setState({ displayType });
    }
  }

  render() {
    const displayType = {
      isMobile: this.state.displayType === 'mobile',
      isTablet: this.state.displayType === 'tablet',
      isDesktop: this.state.displayType === 'desktop',
    };

    return this.props.children(displayType);
  }
}

DisplayType.propTypes = {
  children: PropTypes.func.isRequired,
};

export default DisplayType;
