import React from 'react';
import PropTypes from 'prop-types';
import { compose, setPropTypes, branch, renderComponent } from 'recompose';

import styles from './spinnerButton.less';
import Button from './button';
import SpinnerIcon from '../../icons/spinner';

const SpinnerButton = ({ ...props }) => (
  <Button {...props}>
    <SpinnerIcon className={styles.spinnerIcon} />
  </Button>
);

const propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

const enhance = compose(
  setPropTypes(propTypes),
  branch(
    props => !props.isLoading,
    renderComponent(Button),
  ),
);

export default enhance(SpinnerButton);
