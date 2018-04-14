import { connect } from 'react-redux';
import { compose, withHandlers, defaultProps, setPropTypes, mapProps } from 'recompose';
import PropTypes from 'prop-types';

import ModalButton from './modalButton';
import { showModal } from '../modal/actions';

const handlers = {
  onClick: ({ onClick, modalId, variables, dispatch }) => (...args) => {
    dispatch(showModal(modalId, variables));

    onClick(...args);
  },
};

export default compose(
  setPropTypes({
    modalId: PropTypes.string.isRequired,
    variables: PropTypes.object,
    onClick: PropTypes.func,
  }),
  defaultProps({
    onClick: Function.prototype,
  }),
  connect(),
  withHandlers(handlers),
  mapProps((props) => {
    const { dispatch, modalId, variables, ...newProps } = props;

    return newProps;
  }),
)(ModalButton);
