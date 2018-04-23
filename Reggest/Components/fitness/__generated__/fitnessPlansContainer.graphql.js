/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type variationPlansContainer_fitnessPlan$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type fitnessPlansContainer$ref: FragmentReference;
export type fitnessPlansContainer = {|
  +fitnessPlans: ?$ReadOnlyArray<?{|
    +fitnessPlanId: number,
    +name: ?string,
    +description: ?string,
    +daysPerWeek: number,
    +timeToWorkout: ?{|
      +hours: ?number,
      +minutes: ?number,
    |},
    +$fragmentRefs: variationPlansContainer_fitnessPlan$ref,
  |}>,
  +$refType: fitnessPlansContainer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "fitnessPlansContainer",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "fitnessPlans",
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
          "name": "name",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "description",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "daysPerWeek",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "timeToWorkout",
          "storageKey": null,
          "args": null,
          "concreteType": "TimeToWorkout",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "hours",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "minutes",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "FragmentSpread",
          "name": "variationPlansContainer_fitnessPlan",
          "args": null
        }
      ]
    }
  ]
};
(node/*: any*/).hash = '7e261a988cf680cb717b7e1700c8b05e';
module.exports = node;
