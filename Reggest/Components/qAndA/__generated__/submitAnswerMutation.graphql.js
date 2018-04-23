/**
 * @flow
 * @relayHash 407f94da728fa1b5881f8972d606e8bd
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type variationPlansContainer_fitnessPlan$ref = any;
export type submitAnswerMutationVariables = {|
  input: {
    clientMutationId?: ?string,
    id: number,
  },
|};
export type submitAnswerMutationResponse = {|
  +submitAnswer: ?{|
    +answer: {|
      +points: number,
      +question: ?{|
        +fitnessPlanAnswerPoints: ?$ReadOnlyArray<?{|
          +points: number,
          +fitnessPlan: ?{|
            +fitnessPlanId: number,
            +name: ?string,
            +description: ?string,
            +daysPerWeek: number,
            +timeToWorkout: ?{|
              +hours: ?number,
              +minutes: ?number,
            |},
            +$fragmentRefs: variationPlansContainer_fitnessPlan$ref,
          |},
        |}>,
      |},
    |},
  |},
|};
*/


/*
mutation submitAnswerMutation(
  $input: SubmitAnswerInput!
) {
  submitAnswer(input: $input) {
    answer {
      points
      question {
        fitnessPlanAnswerPoints {
          points
          fitnessPlan {
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
          id
        }
        id
      }
      id
    }
  }
}

fragment variationPlansContainer_fitnessPlan on FitnessPlan {
  variationPlans {
    fitnessPlanId
    daysPerWeek
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "SubmitAnswerInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "SubmitAnswerInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "points",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "fitnessPlanId",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "daysPerWeek",
  "args": null,
  "storageKey": null
},
v7 = {
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
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "submitAnswerMutation",
  "id": null,
  "text": "mutation submitAnswerMutation(\n  $input: SubmitAnswerInput!\n) {\n  submitAnswer(input: $input) {\n    answer {\n      points\n      question {\n        fitnessPlanAnswerPoints {\n          points\n          fitnessPlan {\n            fitnessPlanId\n            name\n            description\n            daysPerWeek\n            timeToWorkout {\n              hours\n              minutes\n            }\n            ...variationPlansContainer_fitnessPlan\n            id\n          }\n          id\n        }\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment variationPlansContainer_fitnessPlan on FitnessPlan {\n  variationPlans {\n    fitnessPlanId\n    daysPerWeek\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "submitAnswerMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "submitAnswer",
        "storageKey": null,
        "args": v1,
        "concreteType": "SubmitAnswerPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "answer",
            "storageKey": null,
            "args": null,
            "concreteType": "Answer",
            "plural": false,
            "selections": [
              v2,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "question",
                "storageKey": null,
                "args": null,
                "concreteType": "Question",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "fitnessPlanAnswerPoints",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "FitnessPlanAnswerPoint",
                    "plural": true,
                    "selections": [
                      v2,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "fitnessPlan",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "FitnessPlan",
                        "plural": false,
                        "selections": [
                          v3,
                          v4,
                          v5,
                          v6,
                          v7,
                          {
                            "kind": "FragmentSpread",
                            "name": "variationPlansContainer_fitnessPlan",
                            "args": null
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "submitAnswerMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "submitAnswer",
        "storageKey": null,
        "args": v1,
        "concreteType": "SubmitAnswerPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "answer",
            "storageKey": null,
            "args": null,
            "concreteType": "Answer",
            "plural": false,
            "selections": [
              v2,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "question",
                "storageKey": null,
                "args": null,
                "concreteType": "Question",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "fitnessPlanAnswerPoints",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "FitnessPlanAnswerPoint",
                    "plural": true,
                    "selections": [
                      v2,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "fitnessPlan",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "FitnessPlan",
                        "plural": false,
                        "selections": [
                          v3,
                          v4,
                          v5,
                          v6,
                          v7,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "variationPlans",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "FitnessPlan",
                            "plural": true,
                            "selections": [
                              v3,
                              v6,
                              v8
                            ]
                          },
                          v8
                        ]
                      },
                      v8
                    ]
                  },
                  v8
                ]
              },
              v8
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = 'cfda04c5dbde357bcfb0fd4c6d5f185d';
module.exports = node;
