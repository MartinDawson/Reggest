/**
 * @flow
 * @relayHash 8466afa296bd745b0ea5d338c181998e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type qAndAContainer$ref = any;
export type fitnessContainerQueryVariables = {|
  questionIndex?: ?number,
|};
export type fitnessContainerQueryResponse = {|
  +$fragmentRefs: qAndAContainer$ref,
|};
*/


/*
query fitnessContainerQuery(
  $questionIndex: Int
) {
  ...qAndAContainer
}

fragment qAndAContainer on Query {
  questionByIndex(index: $questionIndex) {
    questionText
    answers {
      answerId
      answerText
      id
    }
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
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "fitnessContainerQuery",
  "id": null,
  "text": "query fitnessContainerQuery(\n  $questionIndex: Int\n) {\n  ...qAndAContainer\n}\n\nfragment qAndAContainer on Query {\n  questionByIndex(index: $questionIndex) {\n    questionText\n    answers {\n      answerId\n      answerText\n      id\n    }\n    id\n  }\n}\n",
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
        "name": "qAndAContainer",
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
      }
    ]
  }
};
})();
(node/*: any*/).hash = '1fb8ce95bc50a06a9c7f8a84d3b455a0';
module.exports = node;
