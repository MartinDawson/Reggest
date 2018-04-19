import { showPopup } from '../shared/popup/actions';

export const showAddedContributionPoints = newPoints => showPopup(`+ ${newPoints}`);

export const showRegisteredEmailSentPopup = () => showPopup('We have sent you an email to confirm your account registration.');

export const showEmailConfirmationPopup = () => showPopup('You have successfully confirmed your email.');

export const showPasswordResetSentPopup = () => showPopup('We have sent you an email for you to reset your password.');

export const showPasswordResetPopup = () => showPopup('You have successfully reset your password.');
