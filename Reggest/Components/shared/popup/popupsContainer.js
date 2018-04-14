import { connect } from 'react-redux';

import Popups from './popups';
import { hidePopup } from './actions';

const mapStateToProps = ({ popup }) => ({
  popups: popup.popups,
});

export default connect(mapStateToProps, {
  hidePopup,
})(Popups);
