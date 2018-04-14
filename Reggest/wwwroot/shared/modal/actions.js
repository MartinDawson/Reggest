import { resetBodyScroll, disableBodyScroll } from '../utilities/scrollLock';

export const showModal = (id, variables) => {
  disableBodyScroll();

  return {
    type: 'SHOW_MODAL',
    id,
    variables,
  };
};

export const hideModal = () => {
  resetBodyScroll();

  return {
    type: 'HIDE_MODAL',
  };
};
