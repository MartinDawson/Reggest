/**
 * @flow
 * @relayHash 441bd9b6e6233e408a327daddb48b18d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type fitnessPlansContainer$ref = any;
export type fitnessPlansRankedContainerQueryVariables = {|
  order?: ?{
    planIds: $ReadOnlyArray<?number>,
  },
|};
export type fitnessPlansRankedContainerQueryResponse = {|
  +$fragmentRefs: fitnessPlansContainer$ref,
|};
*/


/*
query fitnessPlansRankedContainerQuery(
  $order: FitnessPlanOrderInput
) {
  ...fitnessPlansContainer
}

fragment fitnessPlansContainer on Query {
  fitnessPlans(order: $order) {
    planId
    name
    description
    timeToWorkout {
      hours
      minutes
    }
    links {
      title
      url
      id
    }
    ...workoutDaysPerWeekContainer_plan
    id
  }
}

fragment workoutDaysPerWeekContainer_plan on Plan {
  workoutDaysPerWeek
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "order",
    "type": "FitnessPlanOrderInput",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "fitnessPlansRankedContainerQuery",
  "id": null,
  "text": "query fitnessPlansRankedContainerQuery(\n  $order: FitnessPlanOrderInput\n) {\n  ...fitnessPlansContainer\n}\n\nfragment fitnessPlansContainer on Query {\n  fitnessPlans(order: $order) {\n    planId\n    name\n    description\n    timeToWorkout {\n      hours\n      minutes\n    }\n    links {\n      title\n      url\n      id\n    }\n    ...workoutDaysPerWeekContainer_plan\n    id\n  }\n}\n\nfragment workoutDaysPerWeekContainer_plan on Plan {\n  workoutDaysPerWeek\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "fitnessPlansRankedContainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "fitnessPlansContainer",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "fitnessPlansRankedContainerQuery",
    "argumentDefinitions": v0,
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
              },
              v1
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "workoutDaysPerWeek",
            "args": null,
            "storageKey": null
          },
          v1
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '3f7e8675995536eac845dc1b705880b4';
module.exports = node;
