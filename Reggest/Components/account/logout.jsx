import React from 'react';
import PropTypes from 'prop-types';

import Button from '../shared/button/button';

const Logout = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit} action="">
    <Button styleName="secondary">
      Logout
    </Button>
  </form>
);

Logout.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default Logout;
