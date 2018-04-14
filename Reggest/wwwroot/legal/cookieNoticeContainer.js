import { connect } from 'react-redux';

import CookieNotice from './cookieNotice';
import { showPopup } from '../shared/popup/actions';

export default connect(null, { showPopup })(CookieNotice);
