/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type qAndAContainer$ref: FragmentReference;
export type qAndAContainer = {|
  +questionByIndex: ?{|
    +questionText: string,
    +answers: ?$ReadOnlyArray<?{|
      +answerId: number,
      +answerText: string,
    |}>,
  |},
  +$refType: qAndAContainer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "qAndAContainer",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "questionIndex",
      "type": "Int"
    }
  ],
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
            }
          ]
        }
      ]
    }
  ]
};
(node/*: any*/).hash = 'bacbf1b72deedfcb4557eead1b60e2ce';
module.exports = node;
