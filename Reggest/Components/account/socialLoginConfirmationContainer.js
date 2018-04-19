import { reduxForm, SubmissionError } from 'redux-form';
import { compose, withHandlers, withProps } from 'recompose';

import SocialLoginConfirmation from './socialLoginConfirmation';
import accountValidation from './validation';
import socialLoginConfirmationMutation from './socialLoginConfirmationMutation';

const createProps = ({ userName, returnUrl }) => ({
  initialValues: {
    userName,
    returnUrl,
  },
});

const handlers = {
  onSubmit: () => input => socialLoginConfirmationMutation(input).catch((error) => {
    throw new SubmissionError(error);
  }),
};

export default compose(
  withProps(createProps),
  withHandlers(handlers),
  reduxForm({
    form: 'socialLoginConfirmation',
    validate: accountValidation,
  }),
)(SocialLoginConfirmation);
