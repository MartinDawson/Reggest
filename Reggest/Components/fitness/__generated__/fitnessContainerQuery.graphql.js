/**
 * @flow
 * @relayHash f49cab12834a30d571e551bc52514ea5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type qAndAContainer_question$ref = any;
export type fitnessContainerQueryVariables = {| |};
export type fitnessContainerQueryResponse = {|
  +question: ?{|
    +$fragmentRefs: qAndAContainer_question$ref,
  |},
|};
*/


/*
query fitnessContainerQuery {
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
  "name": "fitnessContainerQuery",
  "id": null,
  "text": "query fitnessContainerQuery {\n  question {\n    ...qAndAContainer_question\n    id\n  }\n}\n\nfragment qAndAContainer_question on Question {\n  questionText\n  answers {\n    answerId\n    answerText\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "fitnessContainerQuery",
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
    "name": "fitnessContainerQuery",
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
(node/*: any*/).hash = '35493b6b4248c5ffebe51c6d14b034ba';
module.exports = node;
