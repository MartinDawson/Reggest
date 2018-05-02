/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type workoutDaysPerWeekContainer_plan$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type fitnessPlansContainer$ref: FragmentReference;
export type fitnessPlansContainer = {|
  +fitnessPlans: ?$ReadOnlyArray<?{|
    +planId: number,
    +name: string,
    +description: string,
    +timeToWorkout: ?{|
      +hours: ?number,
      +minutes: ?number,
    |},
    +links: ?$ReadOnlyArray<?{|
      +title: string,
      +url: string,
    |}>,
    +$fragmentRefs: workoutDaysPerWeekContainer_plan$ref,
  |}>,
  +$refType: fitnessPlansContainer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "fitnessPlansContainer",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "order",
      "type": "FitnessPlanOrderInput"
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "fitnessPlans",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "order",
          "variableName": "order",
          "type": "FitnessPlanOrderInput"
        }
      ],
      "concreteType": "FitnessPlan",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "planId",
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
          "kind": "LinkedField",
          "alias": null,
          "name": "links",
          "storageKey": null,
          "args": null,
          "concreteType": "Link",
          "plural": true,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "title",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "url",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "FragmentSpread",
          "name": "workoutDaysPerWeekContainer_plan",
          "args": null
        }
      ]
    }
  ]
};
(node/*: any*/).hash = 'f1419124f3742d2cc9339c8361efd8b1';
module.exports = node;
