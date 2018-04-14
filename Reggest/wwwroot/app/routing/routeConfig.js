import React from 'react';
import makeRouteConfig from 'found/lib/makeRouteConfig';
import Route from 'found/lib/Route';

import { routeConfig as fitnessRouteConfig } from '../../fitness/fitnessContainer';
import { routeConfig as termsAndConditionsRouteConfig } from '../../legal/termsAndConditionsContainer';
import { routeConfig as privacyPolicyRouteConfig } from '../../legal/privacyPolicyContainer';
import { routeConfig as imprintRouteConfig } from '../../legal/imprintContainer';
import { routeConfig as errorPageRouteConfig } from '../../errorPage/errorPageContainer';

export default makeRouteConfig(
  <Route path="/" {...fitnessRouteConfig}>
    <Route {...fitnessRouteConfig} />
    <Route path="error/:status" {...errorPageRouteConfig} />
    <Route path="termsAndConditions" {...termsAndConditionsRouteConfig} />
    <Route path="privacyPolicy" {...privacyPolicyRouteConfig} />
    <Route path="imprint" {...imprintRouteConfig} />
  </Route>,
);
