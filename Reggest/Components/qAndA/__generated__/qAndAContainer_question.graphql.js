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
          "name": "answerText",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
(node/*: any*/).hash = '39c89e4da91f162670c4aa66d28ebddf';
module.exports = node;
