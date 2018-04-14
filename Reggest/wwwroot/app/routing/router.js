import PropTypes from 'prop-types';
import createConnectedRouter from 'found/lib/createConnectedRouter';
import createRender from 'found/lib/createRender';

const RenderError = ({ error, router }) => {
  router.replace({
    pathname: `/error/${error.status}`,
    state: {
      error: error.data,
    },
  });
};

RenderError.propTypes = {
  error: PropTypes.shape({
    status: PropTypes.number.isRequired,
  }).isRequired,
  router: PropTypes.object.isRequired,
};

export default createConnectedRouter({
  render: createRender({
    renderError: RenderError,
  }),
});

