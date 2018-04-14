import shortid from 'shortid';

/**
 *
 * @param {string} text - The text to show in the popup
 * @param {number} [millisecondsToShow=6000] - The amount of time in milliseconds to show the popup
 */
export const showPopup = (text, millisecondsToShow = 6000) => ({
  type: 'SHOW_POPUP',
  text,
  id: shortid.generate(),
  millisecondsToShow,
});

/**
 *
 * @param {number} index - The index of the popup to hide
 */
export const hidePopup = index => ({
  type: 'HIDE_POPUP',
  index,
});

export const showGenericErrorPopup = (error) => {
  // eslint-disable-next-line no-console
  console.error(error);

  return showPopup('An error has occurred. Please try refreshing the page.');
};
