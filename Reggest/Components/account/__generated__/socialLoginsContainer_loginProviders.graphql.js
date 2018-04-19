/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type socialLoginsContainer_loginProviders$ref: FragmentReference;
export type socialLoginsContainer_loginProviders = $ReadOnlyArray<{|
  +name: string,
  +displayName: string,
  +$refType: socialLoginsContainer_loginProviders$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "socialLoginsContainer_loginProviders",
  "type": "LoginProvider",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "displayName",
      "args": null,
      "storageKey": null
    }
  ]
};
(node/*: any*/).hash = 'dfd47b8f69835db47fdfac17762088d8';
module.exports = node;
