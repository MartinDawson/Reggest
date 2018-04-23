/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type fitnessPlansContainer$ref = any;
type qAndAContainer_question$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type fitnessContainer$ref: FragmentReference;
export type fitnessContainer = {|
  +questionByIndex: ?{|
    +$fragmentRefs: qAndAContainer_question$ref,
  |},
  +$fragmentRefs: fitnessPlansContainer$ref,
  +$refType: fitnessContainer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "fitnessContainer",
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
          "kind": "FragmentSpread",
          "name": "qAndAContainer_question",
          "args": null
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "fitnessPlansContainer",
      "args": null
    }
  ]
};
(node/*: any*/).hash = '08e3b254020159f63f918851347d8efa';
module.exports = node;
