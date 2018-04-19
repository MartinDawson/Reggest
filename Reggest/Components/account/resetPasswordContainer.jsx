import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, SubmissionError } from 'redux-form';
import { compose, withHandlers, withProps } from 'recompose';
import { connect } from 'react-redux';

import ResetPassword from './resetPassword';
import resetPasswordMutation from './resetPasswordMutation';
import accountValidation from './validation';
import { showPasswordResetPopup } from './actions';

const handlers = {
  onSubmit: ({ dispatch }) => input =>
    resetPasswordMutation(input, dispatch)
      .then(() => {
        dispatch(showPasswordResetPopup());
      }).catch((error) => {
        throw new SubmissionError(error);
      }),
};

const createProps = ({ userId, token }) => ({
  initialValues: {
    userId,
    token,
  },
});

const enhance = compose(
  connect(),
  withHandlers(handlers),
  withProps(createProps),
  reduxForm({
    form: 'resetPassword',
    validate: accountValidation,
  }),
);

const ResetPasswordContainer = enhance(ResetPassword);

const render = ({ match }) => (
  <ResetPasswordContainer userId={match.location.query.userId} token={match.location.query.token} />
);

render.propTypes = {
  match: PropTypes.shape({
    location: PropTypes.shape({
      query: PropTypes.shape({
        userId: PropTypes.string.isRequired,
        token: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export const routeConfig = {
  Component: ResetPasswordContainer,
  render,
};

export default ResetPasswordContainer;
