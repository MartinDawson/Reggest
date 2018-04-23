/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type variationPlansContainer_fitnessPlan$ref: FragmentReference;
export type variationPlansContainer_fitnessPlan = {|
  +variationPlans: ?$ReadOnlyArray<?{|
    +fitnessPlanId: number,
    +daysPerWeek: number,
  |}>,
  +$refType: variationPlansContainer_fitnessPlan$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "variationPlansContainer_fitnessPlan",
  "type": "FitnessPlan",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "variationPlans",
      "storageKey": null,
      "args": null,
      "concreteType": "FitnessPlan",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "fitnessPlanId",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "daysPerWeek",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
(node/*: any*/).hash = '49bdd88b073898f4fbe1c1426f19c44f';
module.exports = node;
