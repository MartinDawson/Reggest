/* eslint-disable no-underscore-dangle */
import { HttpError } from 'found';

const withRouteValidation = route => (render) => {
  if (route.error) {
    if (route.error._error) {
      throw new HttpError('400', route.error._error[0]);
    } else {
      throw new HttpError('500');
    }
  }
  return render(route);
};

export default withRouteValidation;
