import { compose, withStateHandlers, lifecycle, branch, renderNothing } from 'recompose';

import CookieNotice from './cookieNotice';

const stateHandlers = {
  showCookieNotice: () => () => ({
    showingCookieNotice: true,
  }),
  hideCookieNotice: () => () => ({
    showingCookieNotice: false,
  }),
};

export default compose(
  withStateHandlers(null, stateHandlers),
  lifecycle({
    componentDidMount() {
      const cookieNoticeShown = localStorage.getItem('cookieNoticeShown');

      if (!cookieNoticeShown) {
        this.props.showCookieNotice(true);

        localStorage.setItem('cookieNoticeShown', true);
      }
    },
  }),
  branch(
    props => !props.showingCookieNotice,
    renderNothing,
  ),
)(CookieNotice);
