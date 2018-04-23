import { connect } from 'react-redux';
import { compose, setPropTypes, branch, renderNothing } from 'recompose';
import PropTypes from 'prop-types';

import Modal from './modal';
import { hideModal, showModal } from './actions';

const mapStateToProps = ({ modal }, { id }) => ({
  isCurrentModal: modal.currentModal === id,
});

export default compose(
  setPropTypes({
    id: PropTypes.string.isRequired,
  }),
  connect(mapStateToProps, {
    hideModal,
    showModal,
  }),
  branch(
    props => !props.isCurrentModal,
    renderNothing,
  ),
)(Modal);
