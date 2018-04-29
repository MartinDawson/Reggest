/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type workoutDaysPerWeekContainer_plan$ref: FragmentReference;
export type workoutDaysPerWeekContainer_plan = {|
  +workoutDaysPerWeek: ?$ReadOnlyArray<?number>,
  +$refType: workoutDaysPerWeekContainer_plan$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "workoutDaysPerWeekContainer_plan",
  "type": "Plan",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "workoutDaysPerWeek",
      "args": null,
      "storageKey": null
    }
  ]
};
(node/*: any*/).hash = '9f817f6584ce0286b890a0e899e54787';
module.exports = node;
