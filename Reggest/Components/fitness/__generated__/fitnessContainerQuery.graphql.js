/**
 * @flow
 * @relayHash 961f534d085350902d1ca1eba487db30
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type fitnessContainer$ref = any;
type fitnessPlansContainer$ref = any;
export type fitnessContainerQueryVariables = {|
  questionIndex?: ?number,
|};
export type fitnessContainerQueryResponse = {|
  +$fragmentRefs: (fitnessContainer$ref & fitnessPlansContainer$ref),
|};
*/


/*
query fitnessContainerQuery(
  $questionIndex: Int
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
  fitnessPlans {
    fitnessPlanId
    name
    description
    daysPerWeek
    timeToWorkout {
      hours
      minutes
    }
    ...variationPlansContainer_fitnessPlan
    id
  }
}

fragment variationPlansContainer_fitnessPlan on FitnessPlan {
  variationPlans {
    fitnessPlanId
    daysPerWeek
    id
  }
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
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "fitnessPlanId",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "daysPerWeek",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "fitnessContainerQuery",
  "id": null,
  "text": "query fitnessContainerQuery(\n  $questionIndex: Int\n) {\n  ...fitnessContainer\n  ...fitnessPlansContainer\n}\n\nfragment fitnessContainer on Query {\n  questionByIndex(index: $questionIndex) {\n    ...qAndAContainer_question\n    id\n  }\n  ...fitnessPlansContainer\n}\n\nfragment fitnessPlansContainer on Query {\n  fitnessPlans {\n    fitnessPlanId\n    name\n    description\n    daysPerWeek\n    timeToWorkout {\n      hours\n      minutes\n    }\n    ...variationPlansContainer_fitnessPlan\n    id\n  }\n}\n\nfragment variationPlansContainer_fitnessPlan on FitnessPlan {\n  variationPlans {\n    fitnessPlanId\n    daysPerWeek\n    id\n  }\n}\n\nfragment qAndAContainer_question on Question {\n  questionText\n  answers {\n    answerId\n    answerText\n    id\n  }\n}\n",
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
        "args": null,
        "concreteType": "FitnessPlan",
        "plural": true,
        "selections": [
          v2,
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
          v3,
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
            "name": "variationPlans",
            "storageKey": null,
            "args": null,
            "concreteType": "FitnessPlan",
            "plural": true,
            "selections": [
              v2,
              v3,
              v1
            ]
          },
          v1
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = 'e564f3b58664fcc2a2770c3c111b4b4f';
module.exports = node;
