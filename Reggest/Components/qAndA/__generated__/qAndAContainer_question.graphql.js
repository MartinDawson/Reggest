/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type qAndAContainer_question$ref: FragmentReference;
export type qAndAContainer_question = {|
  +questionText: ?string,
  +answers: ?$ReadOnlyArray<?{|
    +answerId: number,
    +answerText: ?string,
  |}>,
  +$refType: qAndAContainer_question$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "qAndAContainer_question",
  "type": "Question",
  "metadata": null,
  "argumentDefinitions": [],
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
};
(node/*: any*/).hash = 'c08fdc305d8731938647f226ed0b0105';
module.exports = node;
