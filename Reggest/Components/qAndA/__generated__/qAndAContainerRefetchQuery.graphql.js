/**
 * @flow
 * @relayHash eca7ec2892cedadb383df0e80ac0640f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type qAndAContainer$ref = any;
export type qAndAContainerRefetchQueryVariables = {|
  questionIndex?: ?number,
|};
export type qAndAContainerRefetchQueryResponse = {|
  +$fragmentRefs: qAndAContainer$ref,
|};
*/


/*
query qAndAContainerRefetchQuery(
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
  "name": "qAndAContainerRefetchQuery",
  "id": null,
  "text": "query qAndAContainerRefetchQuery(\n  $questionIndex: Int\n) {\n  ...qAndAContainer\n}\n\nfragment qAndAContainer on Query {\n  questionByIndex(index: $questionIndex) {\n    questionText\n    answers {\n      answerId\n      answerText\n      id\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "qAndAContainerRefetchQuery",
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
    "name": "qAndAContainerRefetchQuery",
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
(node/*: any*/).hash = 'a1d7b0fc73c8b9bd0b5f731bf960ebd5';
module.exports = node;
