/**
 * @flow
 * @relayHash ea028aaf251b66fffdb73864294d9c40
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type fitnessContainer$ref = any;
type fitnessPlansContainer$ref = any;
export type fitnessContainerQueryVariables = {|
  questionIndex?: ?number,
  order?: ?{
    planIds: $ReadOnlyArray<?number>,
  },
|};
export type fitnessContainerQueryResponse = {|
  +$fragmentRefs: (fitnessContainer$ref & fitnessPlansContainer$ref),
|};
*/


/*
query fitnessContainerQuery(
  $questionIndex: Int
  $order: FitnessPlanOrderInput
) {
  ...fitnessContainer
  ...fitnessPlansContainer
}

fragment fitnessContainer on Query {
  questionByIndex(index: $questionIndex) {
    ...qAndAContainer_question
    id
  }
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

fragment qAndAContainer_question on Question {
  questionText
  answers {
    answerId
    answerText
    id
  }
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
  "name": "fitnessContainerQuery",
  "id": null,
  "text": "query fitnessContainerQuery(\n  $questionIndex: Int\n  $order: FitnessPlanOrderInput\n) {\n  ...fitnessContainer\n  ...fitnessPlansContainer\n}\n\nfragment fitnessContainer on Query {\n  questionByIndex(index: $questionIndex) {\n    ...qAndAContainer_question\n    id\n  }\n  ...fitnessPlansContainer\n}\n\nfragment fitnessPlansContainer on Query {\n  fitnessPlans(order: $order) {\n    planId\n    name\n    description\n    timeToWorkout {\n      hours\n      minutes\n    }\n    links {\n      title\n      url\n      id\n    }\n    ...workoutDaysPerWeekContainer_plan\n    id\n  }\n}\n\nfragment workoutDaysPerWeekContainer_plan on Plan {\n  workoutDaysPerWeek\n}\n\nfragment qAndAContainer_question on Question {\n  questionText\n  answers {\n    answerId\n    answerText\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "fitnessContainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "fitnessContainer",
        "args": null
      },
      {
        "kind": "FragmentSpread",
        "name": "fitnessPlansContainer",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "fitnessContainerQuery",
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
(node/*: any*/).hash = '695b6fe15111e86a8f58e7797a5abe36';
module.exports = node;
