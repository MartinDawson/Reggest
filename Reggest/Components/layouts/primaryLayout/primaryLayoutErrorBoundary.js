import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withRouter } from 'found';

class PrimaryLayoutErrorBoundary extends React.Component {
  componentDidCatch() {
    // this.props.router.push('/error/500');
  }
  render() {
    return (
      <div className={this.props.className}>
        {this.props.children}
      </div>
    );
  }
}

PrimaryLayoutErrorBoundary.defaultProps = {
  className: null,
}

PrimaryLayoutErrorBoundary.propTypes = {
  router: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default compose(
  withRouter,
)(PrimaryLayoutErrorBoundary);
