/**
 * @flow
 * @relayHash 81ccf23a6732cca385e3757cb1c3e7cc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type qAndAContainer_question$ref = any;
export type qAndAContainerRefetchQueryVariables = {| |};
export type qAndAContainerRefetchQueryResponse = {|
  +question: ?{|
    +$fragmentRefs: qAndAContainer_question$ref,
  |},
|};
*/


/*
query qAndAContainerRefetchQuery {
  question {
    ...qAndAContainer_question
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
var v0 = {
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
  "text": "query qAndAContainerRefetchQuery {\n  question {\n    ...qAndAContainer_question\n    id\n  }\n}\n\nfragment qAndAContainer_question on Question {\n  questionText\n  answers {\n    answerId\n    answerText\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "qAndAContainerRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
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
            "kind": "FragmentSpread",
            "name": "qAndAContainer_question",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "qAndAContainerRefetchQuery",
    "argumentDefinitions": [],
    "selections": [
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
              v0
            ]
          },
          v0
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = 'e4bcf4165fcd5403d2854252566be518';
module.exports = node;
