/**
 * @flow
 * @relayHash cb9cc8902828ef57a1b82e3f49055d81
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type submitAnswerMutationVariables = {|
  input: {
    clientMutationId?: ?string,
    answerId: number,
  },
|};
export type submitAnswerMutationResponse = {|
  +submitAnswer: ?{|
    +answer: {|
      +fitnessPlanAnswerPoints: ?$ReadOnlyArray<?{|
        +points: number,
        +fitnessPlan: {|
          +name: string,
        |},
      |}>,
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
      fitnessPlanAnswerPoints {
        points
        fitnessPlan {
          name
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
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
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
  "text": "mutation submitAnswerMutation(\n  $input: SubmitAnswerInput!\n) {\n  submitAnswer(input: $input) {\n    answer {\n      fitnessPlanAnswerPoints {\n        points\n        fitnessPlan {\n          name\n          id\n        }\n        id\n      }\n      id\n    }\n  }\n}\n",
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
                      v3
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
                      v4
                    ]
                  },
                  v4
                ]
              },
              v4
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '2fc002e830e41d36e06284d610de10b6';
module.exports = node;
