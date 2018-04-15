import React from 'react';
import makeRouteConfig from 'found/lib/makeRouteConfig';
import Route from 'found/lib/Route';

import { routeConfig as fitnessRouteConfig } from '../../fitness/fitnessContainer';
import { routeConfig as termsAndConditionsRouteConfig } from '../../footer/termsAndConditionsContainer';
import { routeConfig as privacyPolicyRouteConfig } from '../../footer/privacyPolicyContainer';
import { routeConfig as imprintRouteConfig } from '../../footer/imprintContainer';
import { routeConfig as errorPageRouteConfig } from '../../errorPage/errorPageContainer';
import { routeConfig as primaryLayoutRouteConfig } from '../../layouts/primaryLayout/primaryLayoutContainer';

export default makeRouteConfig(
  <Route path="/" {...primaryLayoutRouteConfig}>
    <Route {...fitnessRouteConfig} />
    <Route path="error/:status" {...errorPageRouteConfig} />
    <Route path="termsAndConditions" {...termsAndConditionsRouteConfig} />
    <Route path="privacyPolicy" {...privacyPolicyRouteConfig} />
    <Route path="imprint" {...imprintRouteConfig} />
  </Route>,
);
