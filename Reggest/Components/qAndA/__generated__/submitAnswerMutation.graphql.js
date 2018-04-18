/**
 * @flow
 * @relayHash 236ab54a23af9490bc76227d0056d612
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
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
            +parentFitnessPlan: ?{|
              +id: string,
            |},
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
            parentFitnessPlan {
              id
            }
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
  "name": "id",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "parentFitnessPlan",
  "storageKey": null,
  "args": null,
  "concreteType": "FitnessPlan",
  "plural": false,
  "selections": [
    v5
  ]
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "submitAnswerMutation",
  "id": null,
  "text": "mutation submitAnswerMutation(\n  $input: SubmitAnswerInput!\n) {\n  submitAnswer(input: $input) {\n    answer {\n      points\n      question {\n        fitnessPlanAnswerPoints {\n          points\n          fitnessPlan {\n            fitnessPlanId\n            name\n            parentFitnessPlan {\n              id\n            }\n            id\n          }\n          id\n        }\n        id\n      }\n      id\n    }\n  }\n}\n",
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
                          v6
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
                          v6,
                          v5
                        ]
                      },
                      v5
                    ]
                  },
                  v5
                ]
              },
              v5
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '97eeda7926a88adfd6853e14cd7cdc28';
module.exports = node;
