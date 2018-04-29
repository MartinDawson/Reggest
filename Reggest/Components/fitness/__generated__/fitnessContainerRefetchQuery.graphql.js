/**
 * @flow
 * @relayHash 23fc94d522b27f1efc4ca7df46fe048f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type fitnessContainer$ref = any;
export type fitnessContainerRefetchQueryVariables = {|
  questionIndex?: ?number,
  order?: ?{
    fitnessPlanIds: $ReadOnlyArray<?number>,
  },
|};
export type fitnessContainerRefetchQueryResponse = {|
  +$fragmentRefs: fitnessContainer$ref,
|};
*/


/*
query fitnessContainerRefetchQuery(
  $questionIndex: Int
  $order: FitnessPlanOrderInput
) {
  ...fitnessContainer
}

fragment fitnessContainer on Query {
  questionByIndex(index: $questionIndex) {
    ...qAndAContainer_question
    id
  }
  ...fitnessPlansContainer
}

fragment qAndAContainer_question on Question {
  questionText
  answers {
    answerId
    answerText
    id
  }
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
    "name": "questionIndex",
    "type": "Int",
    "defaultValue": null
  },
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
  "name": "fitnessContainerRefetchQuery",
  "id": null,
  "text": "query fitnessContainerRefetchQuery(\n  $questionIndex: Int\n  $order: FitnessPlanOrderInput\n) {\n  ...fitnessContainer\n}\n\nfragment fitnessContainer on Query {\n  questionByIndex(index: $questionIndex) {\n    ...qAndAContainer_question\n    id\n  }\n  ...fitnessPlansContainer\n}\n\nfragment qAndAContainer_question on Question {\n  questionText\n  answers {\n    answerId\n    answerText\n    id\n  }\n}\n\nfragment fitnessPlansContainer on Query {\n  fitnessPlans(order: $order) {\n    planId\n    name\n    description\n    timeToWorkout {\n      hours\n      minutes\n    }\n    ...workoutDaysPerWeekContainer_plan\n    id\n  }\n}\n\nfragment workoutDaysPerWeekContainer_plan on Plan {\n  workoutDaysPerWeek\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "fitnessContainerRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "fitnessContainer",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "fitnessContainerRefetchQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "questionByIndex",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "index",
            "variableName": "questionIndex",
            "type": "Int"
          }
        ],
        "concreteType": "Question",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "questionText",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "answers",
            "storageKey": null,
            "args": null,
            "concreteType": "Answer",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "answerId",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "answerText",
                "args": null,
                "storageKey": null
              },
              v1
            ]
          },
          v1
        ]
      },
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
(node/*: any*/).hash = 'a0c1c2d23f983a9f3dcae96ced139d76';
module.exports = node;
