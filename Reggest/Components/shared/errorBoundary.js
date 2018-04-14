import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidCatch() {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return this.props.errorOutput;
    }

    return this.props.children;
  }
}

ErrorBoundary.defaultProps = {
  errorOutput: 'Sorry, something went wrong',
};

ErrorBoundary.propTypes = {
  errorOutput: PropTypes.element,
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
