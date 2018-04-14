import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './modal.less';
import Overlay from '../overlay/overlay';
import CrossIcon from '../../icons/cross';

const Modal = ({
  children,
  title,
  hideModal,
  className,
}) => (
  <Overlay onClick={hideModal}>
    <div className={classnames(styles.modal, className)}>
      <button onClick={hideModal} className={styles.close}>
        <CrossIcon />
      </button>
      <div className={styles.title}>
        {title}
      </div>
      {children}
    </div>
  </Overlay>
);

Modal.defaultProps = {
  className: null,
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  hideModal: PropTypes.func.isRequired,
};

export default Modal;
