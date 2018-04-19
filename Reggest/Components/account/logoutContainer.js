import { reduxForm } from 'redux-form';
import { compose, withHandlers } from 'recompose';

import Logout from './logout';
import logoutAccountMutation from './logoutAccountMutation';

const handlers = {
  onSubmit: () => logoutAccountMutation,
};

export default compose(
  withHandlers(handlers),
  reduxForm({
    form: 'logout',
  }),
)(Logout);
